import Forum from '../models/Forum.js';
import User from '../models/User.js';

export const getForums = async (req, res) => {
    try {
        const forums = await Forum.find().populate('penulis').populate({
            path: 'komentar',
            populate: {
                path: 'user replies.user',
                model: User,
            },
        });

        const forumsWithStrIds = forums.map((forum) => {
            return {
                ...forum.toObject(),
                _id: forum._id.toString(),
            };
        });

        res.json(forumsWithStrIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getForumById = async (req, res) => {
    try {
        const forum = await Forum.findById(req.params.id)
            .populate('penulis')
            .populate({
                path: 'komentar',
                populate: {
                    path: 'user replies.user',
                    model: User,
                },
            });

        if (forum) {
            const forumWithStrId = {
                ...forum.toObject(),
                _id: forum._id.toString(),
            };
            res.json(forumWithStrId);
        } else {
            res.status(404).json({ message: 'Forum not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createForum = async (req, res) => {
    const { judul, isi, penulisId } = req.body;

    try {
        const newForum = new Forum({
            judul,
            isi,
            penulis: penulisId,
            komentar: [],
        });

        const forum = await newForum.save();
        res.status(201).json(forum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateForum = async (req, res) => {
    try {
        const updatedForum = await Forum.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('penulis');

        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteForum = async (req, res) => {
    try {
        const deletedForum = await Forum.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//comment
export const createComment = async (req, res) => {
    const { forumId, userId, content } = req.body;

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        const newComment = {
            user: userId,
            content,
            replies: [],
        };

        forum.komentar.push(newComment);
        const updatedForum = await forum.save();

        res.status(201).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    const { forumId, commentId, content } = req.body;

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        const comment = forum.komentar.id(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }

        comment.content = content;
        const updatedForum = await forum.save();

        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    const { forumId, commentId } = req.params; // Use req.params to get commentId from the URL

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        forum.komentar.pull(commentId);
        const updatedForum = await forum.save();

        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// reply
export const createReply = async (req, res) => {
    const { forumId, commentId, userId, content } = req.body;

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        const comment = forum.komentar.id(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }

        const newReply = {
            user: userId,
            content,
        };

        comment.replies.push(newReply);
        const updatedForum = await forum.save();

        res.status(201).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateReply = async (req, res) => {
    const { forumId, commentId, replyId, content } = req.body;

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        const comment = forum.komentar.id(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }

        const reply = comment.replies.id(replyId);

        if (!reply) {
            return res.status(404).json({ message: 'Reply not found.' });
        }

        reply.content = content;
        const updatedForum = await forum.save();

        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteReply = async (req, res) => {
    const { forumId, commentId, replyId } = req.params;

    try {
        const forum = await Forum.findById(forumId);

        if (!forum) {
            return res.status(404).json({ message: 'Forum not found.' });
        }

        const comment = forum.komentar.id(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }

        comment.replies.pull(commentId);

        const updatedForum = await forum.save();

        res.status(200).json(updatedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
