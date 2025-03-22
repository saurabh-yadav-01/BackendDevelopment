const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory data store (for demonstration)
let todos = [
    {
        id: 1,
        title: 'Learn REST APIs',
        description: 'Study REST principles and best practices',
        completed: false,
        dueDate: '2024-03-30',
        createdAt: '2024-03-25T10:00:00Z',
        updatedAt: '2024-03-25T10:00:00Z'
    }
];

// Validation middleware
const validateTodo = (req, res, next) => {
    const { title, description, dueDate } = req.body;
    
    if (!title || title.trim().length === 0) {
        return res.status(400).json({ error: 'Title is required' });
    }
    
    if (dueDate && isNaN(Date.parse(dueDate))) {
        return res.status(400).json({ error: 'Invalid due date format' });
    }
    
    next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
};

// Routes

// GET all todos with filtering and pagination
app.get('/api/v1/todos', (req, res) => {
    const { completed, page = 1, limit = 10 } = req.query;
    let filteredTodos = [...todos];

    // Filter by completion status
    if (completed !== undefined) {
        filteredTodos = filteredTodos.filter(todo => 
            todo.completed === (completed === 'true')
        );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedTodos = filteredTodos.slice(startIndex, endIndex);

    res.json({
        todos: paginatedTodos,
        total: filteredTodos.length,
        page: parseInt(page),
        totalPages: Math.ceil(filteredTodos.length / limit)
    });
});

// GET single todo
app.get('/api/v1/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
});

// POST new todo
app.post('/api/v1/todos', validateTodo, (req, res) => {
    const { title, description, completed = false, dueDate } = req.body;
    
    const newTodo = {
        id: todos.length + 1,
        title,
        description,
        completed,
        dueDate,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT update todo
app.put('/api/v1/todos/:id', validateTodo, (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const { title, description, completed, dueDate } = req.body;
    
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    todo.dueDate = dueDate;
    todo.updatedAt = new Date().toISOString();

    res.json(todo);
});

// PATCH partial update todo
app.patch('/api/v1/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const updates = req.body;
    Object.keys(updates).forEach(key => {
        if (key in todo) {
            todo[key] = updates[key];
        }
    });
    
    todo.updatedAt = new Date().toISOString();
    res.json(todo);
});

// DELETE todo
app.delete('/api/v1/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    todos.splice(todoIndex, 1);
    res.status(204).send();
});

// Apply error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('\nAvailable Routes:');
    console.log('GET    /api/v1/todos');
    console.log('GET    /api/v1/todos/:id');
    console.log('POST   /api/v1/todos');
    console.log('PUT    /api/v1/todos/:id');
    console.log('PATCH  /api/v1/todos/:id');
    console.log('DELETE /api/v1/todos/:id');
}); 