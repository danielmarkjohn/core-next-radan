// src/pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next'

// Sample user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' }
];

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  // Check if the request method is GET
  if (req.method === 'GET') {
    try {
      // You can add query parameter handling if needed
      const { id } = req.query;

      if (id) {
        // If an ID is provided, return a specific user
        const user = users.find(u => u.id === Number(id));
        if (user) {
          return res.status(200).json(user);
        }
        return res.status(404).json({ message: 'User not found' });
      }

      // If no ID, return all users
      res.status(200).json(users);
    } catch (error) {
      // Handle any errors
      console.error('Error fetching users:', error);
      res.status(500).json({ 
        message: 'Error fetching users', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  } else {
    // Handle non-GET requests
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}