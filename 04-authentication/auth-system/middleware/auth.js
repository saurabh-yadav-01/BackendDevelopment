const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - Authentication
exports.protect = async (req, res, next) => {
    try {
        let token;

        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                error: 'Not authorized to access this route'
            });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

            // Get user from token
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            return res.status(401).json({
                error: 'Not authorized to access this route'
            });
        }
    } catch (error) {
        next(error);
    }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                error: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

// Verify refresh token
exports.verifyRefreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({
                error: 'Refresh token is required'
            });
        }

        try {
            // Verify refresh token
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

            // Get user with refresh token
            const user = await User.findById(decoded.id).select('+refreshToken');

            if (!user || user.refreshToken !== refreshToken) {
                return res.status(401).json({
                    error: 'Invalid refresh token'
                });
            }

            req.user = user;
            next();
        } catch (error) {
            return res.status(401).json({
                error: 'Invalid refresh token'
            });
        }
    } catch (error) {
        next(error);
    }
}; 