import jwt from 'jsonwebtoken';

const verifyTokenMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secretKey = 'bismillah-ppl2-ini-bisa-beres-2023';
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token Payload:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token Verification Error:', error);
    res.status(401).json({ message: 'Invalid token.', error: error.message });
  }
};

export default verifyTokenMiddleware;