import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get token from query parameter
  const { token } = req.query;
  
  // Validate token
  const validToken = 'ChunuLegacy2025';
  
  if (!token || token !== validToken) {
    return res.status(403).json({ error: 'Invalid or missing token' });
  }

  try {
    // Read the PDF file from the private folder
    const filePath = join(process.cwd(), 'private', 'Living-and-Ageing-Gracefully-Book.pdf');
    const fileBuffer = readFileSync(filePath);

    // Set appropriate headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Living and Ageing Gracefully Book+.pdf"');
    res.setHeader('Content-Length', fileBuffer.length);
    
    // Send the file
    return res.status(200).send(fileBuffer);
  } catch (error) {
    console.error('Error reading file:', error);
    return res.status(500).json({ error: 'Error downloading file' });
  }
}

