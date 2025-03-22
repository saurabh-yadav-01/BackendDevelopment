// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello, World!');
});

// Define a route for '/about'
app.get('/about', (req, res) => {
    res.send('About Us Page');
});

// Define a route for '/time'
app.get('/time',(req,res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`The current time is ${currentTime}`);
});

// Define a route for '/api/status'
app.get('/api/status', (req, res) => {
    // Send a JSON response
    res.json({
        status: 'ok',
        message: 'Server is running',
        timestamp: new Date()
    });
});

// Define a route with a parameter
app.get('/hello/:first_name/:age', (req, res) => {
    // Access the name parameter from the URL
    const first_name = req.params.first_name;
    const age = req.params.age;
    res.send(`Hello, ${first_name}! You are ${age} years old.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 