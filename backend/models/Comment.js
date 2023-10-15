import mongoose from "mongoose";
import User from "../models/User.js"; // Import the User model

const replySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Reference to the User model
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    replies: [],
});

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Reference to the User model
    },
    content: {
        type: String,
        required: true,
    },
    replies: [replySchema],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
