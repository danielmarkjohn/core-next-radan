// src/pages/api/get-processed-data.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:xbzE8wSLaXOFaBrb@core-next.cbjdj.mongodb.net/?retryWrites=true&w=majority&appName=core-next'
const dbName = process.env.MONGODB_DBNAME || 'health-metrics'

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      const client = new MongoClient(uri);
      await client.connect();
      
      // Get database and collection
      const db = client.db(dbName);
      const collection = db.collection('processedData');
      
      // Fetch documents (limit to first 30 for example)
      const documents = await collection.find({}).limit(2).toArray();
      
      // Close the connection
      await client.close();
      
      // Send response
      res.status(200).json(documents);
    } catch (error) {
      console.error('Error fetching processed data:', error);
      res.status(500).json({ 
        message: 'Error fetching processed data', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  } else {
    // Handle non-GET requests
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}