const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Comment content is required'],
        trim: true,
        minlength: [1, 'Comment cannot be empty']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

// Middleware to update post's comments array
commentSchema.post('save', async function() {
    await this.model('Post').findByIdAndUpdate(
        this.post,
        { $addToSet: { comments: this._id } }
    );
});

// Middleware to remove comment reference from post when deleted
commentSchema.pre('remove', async function(next) {
    await this.model('Post').findByIdAndUpdate(
        this.post,
        { $pull: { comments: this._id } }
    );
    next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment; 