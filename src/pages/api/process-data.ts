// src/pages/api/process-data.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

// Ensure the connection URI is correctly parsed
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:xbzE8wSLaXOFaBrb@core-next.cbjdj.mongodb.net/?retryWrites=true&w=majority&appName=core-next'
const dbName = process.env.MONGODB_DBNAME || 'health-metrics'

async function connectToDatabase() {
  if (!uri) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB successfully');
    return client.db(dbName);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    try {
      // Connect to the database
      const db = await connectToDatabase();
      
      // Get the collection (will create if not exists)
      const collection = db.collection('processedData');
      
      // Parse the JSON body from the request
      const data = req.body;

      // Validate incoming data
      if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ 
          message: 'No data provided' 
        });
      }

      // Add timestamp to the data
      const documentToInsert = {
        ...data,
        createdAt: new Date()
      };

      // Insert the data into MongoDB
      const result = await collection.insertOne(documentToInsert);

      // Send a response back
      res.status(200).json({ 
        message: 'Data processed and stored successfully', 
        insertedId: result.insertedId 
      });
    } catch (error) {
      // Handle any errors in processing
      console.error('Error processing data:', error);
      
      // More detailed error response
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Unknown error occurred';
      
      res.status(500).json({ 
        message: 'Error processing data', 
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}