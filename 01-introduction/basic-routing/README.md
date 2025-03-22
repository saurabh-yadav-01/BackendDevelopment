# Basic Routing in Express.js

This module builds upon the Hello World server and introduces more advanced routing concepts in Express.js.

## Learning Objectives

After completing this module, you will understand:
- Route parameters and query strings
- HTTP methods (GET, POST, PUT, DELETE)
- Route handlers and middleware
- Request and response objects
- Route chaining
- Error handling in routes

## Concepts Covered

### 1. Route Parameters
- URL parameters (`:param`)
- Query strings (`?key=value`)
- Optional parameters
- Multiple parameters

### 2. HTTP Methods
- GET: Retrieve data
- POST: Create new data
- PUT: Update existing data
- DELETE: Remove data

### 3. Request Object
- `req.params`: URL parameters
- `req.query`: Query string parameters
- `req.body`: Request body (requires middleware)
- `req.headers`: HTTP headers

### 4. Response Object
- `res.send()`: Send various types of responses
- `res.json()`: Send JSON responses
- `res.status()`: Set HTTP status codes
- `res.redirect()`: Redirect to another URL

## Exercises

### Exercise 1: User Profile API
Create routes for a user profile system:
- GET `/users/:id` - Get user profile
- POST `/users` - Create new user
- PUT `/users/:id` - Update user profile
- DELETE `/users/:id` - Delete user

### Exercise 2: Query Parameters
Create a search API that accepts query parameters:
- GET `/search?q=term&limit=10` - Search with query and limit
- GET `/filter?category=books&price=10-20` - Filter with multiple parameters

### Exercise 3: Route Chaining
Implement route chaining for a blog system:
- GET `/blog/posts/:postId/comments` - Get comments for a post
- POST `/blog/posts/:postId/comments` - Add a comment to a post

## Challenge Tasks

1. Create a RESTful API for a todo list with:
   - List all todos
   - Get a single todo
   - Create a new todo
   - Update a todo
   - Delete a todo
   - Mark todo as complete

2. Implement a file upload system with:
   - Upload file
   - List uploaded files
   - Download file
   - Delete file

## Testing Your Routes

Use Postman or Thunder Client to test your routes:
1. Create a new collection
2. Add requests for each route
3. Test different HTTP methods
4. Verify responses and status codes

## Best Practices

1. Use meaningful route names
2. Implement proper error handling
3. Use appropriate HTTP status codes
4. Validate input parameters
5. Keep routes organized and modular

## Next Steps

After completing this module, you'll move on to:
- RESTful APIs & HTTP Methods
- Database integration
- Authentication & Authorization 