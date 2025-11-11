const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ');
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'test-secret-key-123');
      
      const User = require('../models/User');
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) return res.status(401).json({ message: 'User not found' });
      next();
    } else {
      return res.status(401).json({ message: 'No token' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not admin' });
  }
};

module.exports = { protect, admin };
