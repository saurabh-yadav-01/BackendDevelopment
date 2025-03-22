class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// Error types
const errorTypes = {
    VALIDATION_ERROR: 'ValidationError',
    CAST_ERROR: 'CastError',
    DUPLICATE_KEY_ERROR: 'DuplicateKeyError',
    JWT_ERROR: 'JsonWebTokenError',
    JWT_EXPIRED: 'TokenExpiredError'
};

// Error messages
const errorMessages = {
    INVALID_INPUT: 'Invalid input data',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'You are not authorized to perform this action',
    FORBIDDEN: 'You are forbidden from performing this action',
    SERVER_ERROR: 'Internal server error'
};

module.exports = {
    AppError,
    errorTypes,
    errorMessages
}; 