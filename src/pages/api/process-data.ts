// src/pages/api/process-data.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

// MongoDB Connection URL - typically stored in environment variables
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:Admin@2025@core-next.cbjdj.mongodb.net/?retryWrites=true&w=majority&appName=core-next'
const dbName = process.env.MONGODB_DBNAME || 'health-metrics'

async function connectToDatabase() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    console.log('Connected to MongoDB', uri, dbName);

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
      const collection = db.collection('health-metrics-collection');
      
      // Parse the JSON body from the request
      const data = req.body;
      console.log('Connected to data', data);

      // Add timestamp to the data
      const documentToInsert = {
        ...data,
        createdAt: new Date()
      };
      console.log('documentToInsert', documentToInsert);

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
      res.status(500).json({ 
        message: 'Error processing data', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}