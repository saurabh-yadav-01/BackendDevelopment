const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store (for demonstration)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Basic route with query parameters
app.get('/search', (req, res) => {
    const { q, limit = 10 } = req.query;
    res.json({
        query: q,
        limit: parseInt(limit),
        message: `Searching for: ${q} with limit: ${limit}`
    });
});

// User routes demonstrating CRUD operations
// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// POST new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

// Route chaining example
app.route('/blog/posts/:postId/comments')
    .get((req, res) => {
        // Get comments for a post
        res.json({
            postId: req.params.postId,
            comments: [
                { id: 1, text: 'Great post!' },
                { id: 2, text: 'Thanks for sharing!' }
            ]
        });
    })
    .post((req, res) => {
        // Add a comment to a post
        const { text } = req.body;
        res.status(201).json({
            postId: req.params.postId,
            comment: { id: 1, text }
        });
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\nAvailable Routes:');
    console.log('GET    /search?q=term&limit=10');
    console.log('GET    /users');
    console.log('GET    /users/:id');
    console.log('POST   /users');
    console.log('PUT    /users/:id');
    console.log('DELETE /users/:id');
    console.log('GET    /blog/posts/:postId/comments');
    console.log('POST   /blog/posts/:postId/comments');
}); 