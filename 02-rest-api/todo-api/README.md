# RESTful APIs with Express.js

This module focuses on building a complete RESTful API for a Todo application. You'll learn about REST principles, API design, and best practices.

## Learning Objectives

After completing this module, you will understand:
- REST principles and constraints
- API design best practices
- HTTP methods and status codes
- Request/Response handling
- API versioning
- API documentation
- Error handling and validation

## REST Principles

1. **Stateless Communication**
   - Each request contains all necessary information
   - No client context stored on server

2. **Client-Server Architecture**
   - Separation of concerns
   - Independent evolution

3. **Uniform Interface**
   - Resource identification
   - Resource manipulation through representations
   - Self-descriptive messages
   - Hypermedia as the engine of application state (HATEOAS)

## API Endpoints

### Todo API Endpoints

```
GET    /api/v1/todos          - List all todos
GET    /api/v1/todos/:id      - Get a single todo
POST   /api/v1/todos          - Create a new todo
PUT    /api/v1/todos/:id      - Update a todo
DELETE /api/v1/todos/:id      - Delete a todo
PATCH  /api/v1/todos/:id      - Partial update of a todo
```

### Request/Response Format

#### Create Todo (POST)
```json
{
    "title": "Complete REST API Tutorial",
    "description": "Learn REST principles and build a todo API",
    "completed": false,
    "dueDate": "2024-03-30"
}
```

#### Response
```json
{
    "id": 1,
    "title": "Complete REST API Tutorial",
    "description": "Learn REST principles and build a todo API",
    "completed": false,
    "dueDate": "2024-03-30",
    "createdAt": "2024-03-25T10:00:00Z",
    "updatedAt": "2024-03-25T10:00:00Z"
}
```

## HTTP Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Best Practices

1. **URL Design**
   - Use nouns, not verbs
   - Use plural nouns for collections
   - Use nested resources for relationships

2. **Versioning**
   - Include version in URL (/api/v1/...)
   - Use semantic versioning

3. **Error Handling**
   - Consistent error format
   - Appropriate status codes
   - Detailed error messages

4. **Documentation**
   - API documentation
   - Example requests/responses
   - Authentication requirements

## Exercises

1. **Basic CRUD Operations**
   - Implement all CRUD endpoints
   - Add input validation
   - Handle errors appropriately

2. **Advanced Features**
   - Add filtering and pagination
   - Implement sorting
   - Add search functionality

3. **API Documentation**
   - Document all endpoints
   - Add example requests/responses
   - Include authentication details

## Testing

1. **Unit Tests**
   - Test individual endpoints
   - Test error cases
   - Test validation

2. **Integration Tests**
   - Test complete workflows
   - Test error scenarios
   - Test edge cases

## Next Steps

After completing this module, you'll move on to:
- Database integration with MongoDB
- Authentication & Authorization
- API security best practices 