# Database Integration with MongoDB

This module focuses on integrating MongoDB with our Node.js/Express.js application to create a blog API with persistent data storage.

## Learning Objectives

After completing this module, you will understand:
- NoSQL database concepts
- MongoDB basics and data modeling
- Mongoose ODM (Object Document Mapper)
- CRUD operations with MongoDB
- Data relationships and population
- Schema validation
- Error handling with databases

## MongoDB Concepts

### 1. Document-Based Storage
- Documents instead of rows/columns
- JSON-like BSON format
- Flexible schema
- Nested documents and arrays

### 2. Collections and Documents
- Collections ≈ Tables
- Documents ≈ Rows
- Fields ≈ Columns
- Dynamic schema

### 3. Mongoose Features
- Schema definition
- Model creation
- Validation
- Middleware (pre/post hooks)
- Population (references)
- Query building

## Project Structure

```
blog-api/
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
├── routes/
│   ├── users.js
│   ├── posts.js
│   └── comments.js
├── config/
│   └── database.js
├── middleware/
│   └── error.js
└── server.js
```

## Database Schema

### User Schema
```javascript
{
    username: String,
    email: String,
    password: String,
    createdAt: Date,
    posts: [{ type: ObjectId, ref: 'Post' }]
}
```

### Post Schema
```javascript
{
    title: String,
    content: String,
    author: { type: ObjectId, ref: 'User' },
    comments: [{ type: ObjectId, ref: 'Comment' }],
    tags: [String],
    createdAt: Date,
    updatedAt: Date
}
```

### Comment Schema
```javascript
{
    content: String,
    author: { type: ObjectId, ref: 'User' },
    post: { type: ObjectId, ref: 'Post' },
    createdAt: Date
}
```

## API Endpoints

### Users
```
GET    /api/users          - List all users
GET    /api/users/:id      - Get user profile
POST   /api/users          - Create new user
PUT    /api/users/:id      - Update user
DELETE /api/users/:id      - Delete user
GET    /api/users/:id/posts - Get user's posts
```

### Posts
```
GET    /api/posts          - List all posts
GET    /api/posts/:id      - Get single post
POST   /api/posts          - Create new post
PUT    /api/posts/:id      - Update post
DELETE /api/posts/:id      - Delete post
GET    /api/posts/:id/comments - Get post comments
```

### Comments
```
POST   /api/posts/:id/comments - Add comment
PUT    /api/comments/:id     - Update comment
DELETE /api/comments/:id     - Delete comment
```

## Setup Instructions

1. Install MongoDB locally or set up MongoDB Atlas
2. Install dependencies:
   ```bash
   npm install mongoose express dotenv
   ```
3. Create `.env` file with MongoDB URI
4. Run the server:
   ```bash
   npm start
   ```

## Exercises

1. **Basic MongoDB Operations**
   - Connect to MongoDB
   - Create schemas and models
   - Implement CRUD operations

2. **Advanced Features**
   - Implement data relationships
   - Add validation
   - Use Mongoose middleware
   - Handle database errors

3. **Data Querying**
   - Complex queries
   - Aggregation
   - Population
   - Indexing

## Best Practices

1. **Data Modeling**
   - Plan your schema
   - Consider relationships
   - Use appropriate data types
   - Add validation

2. **Error Handling**
   - Handle connection errors
   - Handle validation errors
   - Handle duplicate keys
   - Implement proper error responses

3. **Performance**
   - Use indexes
   - Implement pagination
   - Optimize queries
   - Handle large datasets

## Next Steps

After completing this module, you'll move on to:
- Authentication & Authorization
- API Security
- Advanced MongoDB features 