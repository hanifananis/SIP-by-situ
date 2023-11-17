import mongoose from 'mongoose';
import User from '../models/User.js';

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

const forumSchema = new mongoose.Schema({
    judul: { type: String, required: true },
    isi: { type: String, required: true },
    penulis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Reference to the User model
    },
    komentar: [commentSchema],
    });

forumSchema.set('timestamps', true);

export default mongoose.model('Forums', forumSchema);

