import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('user');
        const commentsWithStrIds = comments.map(comment => {
            return {
                ...comment.toObject(),
                _id: comment._id.toString()
            };
        });
        res.json(commentsWithStrIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('user');
        if (comment) {
            const commentWithStrId = {
                ...comment.toObject(),
                _id: comment._id.toString()
            };
            res.json(commentWithStrId);
        } else {
            res.status(404).json({ message: "Comment not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createComment = async (req, res) => {
    const { userId, content } = req.body;

    try {
        const newComment = new Comment({
            user: userId,
            content,
            replies: [],
        });

        const comment = await newComment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const replyToComment = async (req, res) => {
    const { userId, content } = req.body;
    const commentId = req.params.commentId;

    try {
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found." });
        }

        const newReply = {
            user: userId,
            content,
        };

        comment.replies.push(newReply);

        const updatedComment = await comment.save();
        res.status(201).json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
