# Hello World Server with Express.js

This module introduces you to creating your first Express.js server. You'll learn about:
- Setting up a Node.js project
- Installing dependencies
- Creating a basic Express server
- Understanding HTTP requests and responses

## Prerequisites
- Node.js installed on your system
- Basic understanding of JavaScript
- VS Code or any code editor

## Project Setup

1. Initialize a new Node.js project:
```bash
npm init -y
```

2. Install Express.js:
```bash
npm install express
```

3. Create a new file called `server.js`

## Exercise: Create Your First Server

Create a basic Express server that responds with "Hello, World!" when you visit the root URL.

### Steps:
1. Import Express
2. Create an Express application
3. Define a route for the root URL
4. Start the server

### Expected Output:
When you visit `http://localhost:3000`, you should see "Hello, World!" in your browser.

## Challenge Tasks

1. Add a new route `/about` that returns "About Us" page
2. Create a route `/api/status` that returns a JSON response with server status
3. Add a route that accepts a name parameter and returns "Hello, [name]!"

## Testing Your Server

1. Start the server:
```bash
node server.js
```

2. Open your browser and visit:
- http://localhost:3000
- http://localhost:3000/about
- http://localhost:3000/api/status

## Learning Objectives

After completing this module, you should understand:
- How to set up a basic Express.js server
- How to create routes
- How to send different types of responses
- How to handle basic HTTP requests

## Next Steps

After completing this module, move on to:
- Basic Routing module
- Understanding HTTP methods
- Creating more complex routes 