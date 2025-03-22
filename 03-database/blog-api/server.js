const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Blog API',
        endpoints: {
            users: '/api/users',
            posts: '/api/posts',
            comments: '/api/posts/:postId/comments'
        }
    });
});

// Routes will be added here
// app.use('/api/users', require('./routes/users'));
// app.use('/api/posts', require('./routes/posts'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: {
            message: err.message || 'Something went wrong!',
            status: err.status || 500
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\nAvailable Routes:');
    console.log('GET     /api/users          - List all users');
    console.log('GET     /api/users/:id      - Get user profile');
    console.log('POST    /api/users          - Create new user');
    console.log('PUT     /api/users/:id      - Update user');
    console.log('DELETE  /api/users/:id      - Delete user');
    console.log('GET     /api/posts          - List all posts');
    console.log('GET     /api/posts/:id      - Get single post');
    console.log('POST    /api/posts          - Create new post');
    console.log('PUT     /api/posts/:id      - Update post');
    console.log('DELETE  /api/posts/:id      - Delete post');
    console.log('POST    /api/posts/:id/comments - Add comment');
}); 