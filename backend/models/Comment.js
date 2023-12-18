import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
    penulis_id:{ type: String, required: true },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const commentSchema = new mongoose.Schema({
    penulis_id:{ type: String, required: true },
    forum_id:{ type: String, required: true },
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
