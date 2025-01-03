// src/pages/api/process-data.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    try {
      // Parse the JSON body from the request
      const data = req.body;

      // Process the data (example: just echoing back the received data)
      console.log('Received data:', data);

      // Send a response back
      res.status(200).json({ 
        message: 'Data processed successfully', 
        receivedData: data 
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