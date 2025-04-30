import type { NextApiRequest, NextApiResponse } from 'next';

// Optional: Simulate authentication check
const isAuthenticated = (req: NextApiRequest): boolean => {
  // Implement your real auth logic here (e.g., check cookies, tokens, headers)
  return true;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.status(200).json({
    text: 'This is a protected message.'
  });
}
