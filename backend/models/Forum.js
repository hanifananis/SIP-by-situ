import mongoose from 'mongoose';
import User from '../models/User.js';

const forumSchema = new mongoose.Schema({
    judul: { type: String, required: true },
    isi: { type: String, required: true },
    penulis_id:{ type: String, required: true }
})
forumSchema.set('timestamps', true);

export default mongoose.model('Forums', forumSchema);

