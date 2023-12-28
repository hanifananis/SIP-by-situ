import Forum from "../models/Forum.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

// Get all forums
export const getAllForums = async (req, res) => {
try {
    const forums = await Forum.find().sort({createdAt: -1});
    const forumsWithUserData = await Promise.all(forums.map(async (forum) => {
        const user = await User.findById(forum.penulis_id);
        const { name, roles } = user;
        const commentCount = await Comment.countDocuments({ forum_id: forum._id });

        return {
          ...forum.toObject(),
          jumlah_komentar: commentCount,
          penulis: { name, roles },
        };
      }));
      res.json(forumsWithUserData);
} catch (error) {
    res.status(500).json({ message: error.message });
}
};

// Get forum by ID with associated comments and user info for each reply
export const getForumById = async (req, res) => {
    const forumId = req.params.forumId;
    try {
        const forum = await Forum.findById(forumId);
        if (!forum) {
            return res.status(404).json({ message: "Forum not found." });
        }

        const comments = await Comment.find({ forum_id: forumId }).sort({created_at: -1});
        const commentsWithUserData = await Promise.all(comments.map(async (comment) => {
            const user = await User.findById(comment.penulis_id);
            const { name, roles } = user;

            const repliesWithUserData = await Promise.all(comment.replies.map(async (reply) => {
                const replyUser = await User.findById(reply.penulis_id);
                const { name: replyUserName, roles: replyUserRoles } = replyUser;

                return {
                    ...reply.toObject(),
                    user: { name: replyUserName, roles: replyUserRoles },
                };
            }));

            return {
                ...comment.toObject(),
                user: { name, roles },
                replies: repliesWithUserData,
            };
        }));

        const user = await User.findById(forum.penulis_id);
        const { name, roles } = user;

        const forumWithCommentsAndUserData = {
            ...forum.toObject(),
            penulis: { name, roles },
            comments: commentsWithUserData,
        };

        res.json(forumWithCommentsAndUserData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new forum
export const createForum = async (req, res) => {
    const { judul, isi, penulis_id } = req.body;

    try {
    const user = await User.findById(penulis_id);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    const newForum = new Forum({
        judul,
        isi,
        penulis_id,
    });

    const savedForum = await newForum.save();
    const { name, roles } = user;
    const forumWithUserData = {
        ...savedForum.toObject(),
        penulis: { name, roles },
    };

    res.status(201).json(forumWithUserData);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Edit a forum
export const editForum = async (req, res) => {
    const { judul, isi } = req.body;
    const forumId = req.params.forumId;

    try {
    const forum = await Forum.findByIdAndUpdate(
        forumId,
        { $set: { judul, isi } },
        { new: true }
    );

    res.json(forum);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Delete a forum
export const deleteForum = async (req, res) => {
    const forumId = req.params.forumId;

    try {
    await Forum.findByIdAndRemove(forumId);
    res.json({ message: "Forum deleted successfully." });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Create a new comment
export const createComment = async (req, res) => {
    const { penulis_id, content, forum_id } = req.body;

    try {
    const user = await User.findById(penulis_id);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    const newComment = new Comment({
        penulis_id,
        content,
        forum_id,
    });

    const savedComment = await newComment.save();
    const { name, roles } = user;
    const commentWithUserData = {
        ...savedComment.toObject(),
        user: { name, roles },
    };

    res.status(201).json(commentWithUserData);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Add a reply to a comment
export const addReply = async (req, res) => {
    const { penulis_id, content } = req.body;
    const commentId = req.params.commentId;

    try {
    const user = await User.findById(penulis_id);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
        return res.status(404).json({ message: "Comment not found." });
    }

    const newReply = {
        penulis_id,
        content,
    };

    comment.replies.push(newReply);
    await comment.save();

    const { name, roles } = user;
    const replyWithUserData = {
        ...newReply,
        user: { name, roles },
    };

    res.status(201).json(replyWithUserData);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Edit a comment or reply
export const editCommentOrReply = async (req, res) => {
    const { content } = req.body;
    const { commentId, replyId } = req.params;

    try {
    let updatedObject;

    if (replyId) {
        const comment = await Comment.findOneAndUpdate(
        { "replies._id": replyId },
        { $set: { "replies.$.content": content } },
        { new: true }
        );
        updatedObject = comment.replies.find((reply) => reply._id.toString() === replyId);
    } else {
        const comment = await Comment.findByIdAndUpdate(
        commentId,
        { $set: { content: content } },
        { new: true }
        );
        updatedObject = comment;
    }

    res.json(updatedObject);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// Delete a comment or reply
export const deleteCommentOrReply = async (req, res) => {
    const { commentId, replyId } = req.params;

    try {
    if (replyId) {
        await Comment.findByIdAndUpdate(
        commentId,
        { $pull: { replies: { _id: replyId } } },
        { new: true }
        );
        res.json({ message: "Reply deleted successfully." });
    } else {
        await Comment.findByIdAndRemove(commentId);
        res.json({ message: "Comment deleted successfully." });
    }
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

export const getAllCommentWithReply = async (req, res) => {
    try{
        const comments = await Comment.find();
        const commentsWithUserData = await Promise.all(comments.map(async (comment) => {
            const user = await User.findById(comment.penulis_id);
            const { name, roles } = user;

            const repliesWithUserData = await Promise.all(comment.replies.map(async (reply) => {
                const replyUser = await User.findById(reply.penulis_id);
                const { name: replyUserName, roles: replyUserRoles } = replyUser;

                return {
                    ...reply.toObject(),
                    user: { name: replyUserName, roles: replyUserRoles },
                };
            }));

            return {
                ...comment.toObject(),
                user: { name, roles },
                replies: repliesWithUserData,
            };
        }));
        res.json(commentsWithUserData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all replies by author ID
export const getAllRepliesByAuthorId = async (req, res) => {
    const penulis_id = req.params.penulis_id;
    const userReply = await User.findById(penulis_id)
    try {
        // Find all comments and replies by the author ID
        const comments = await Comment.find();

        const repliesWithParentComments = [];

        // Iterate through each comment
        for (const comment of comments) {
            // Iterate through each reply in the comment
            for (const reply of comment.replies) {
                // Check if the reply's author ID matches the specified penulis_id
                if (reply.penulis_id === penulis_id) {
                    // Include the parent comment along with the reply
                    const parentComment = await Comment.findById(comment._id).select('-replies');;
                    const user_comment =  await User.findById(comment.penulis_id);
                    repliesWithParentComments.push({
                        parentComment: {
                            ...parentComment.toObject(),
                            user: { name: user_comment.name, roles : user_comment.roles},
                        },
                        reply: {
                            ...reply.toObject(),
                            user: { name: userReply.name, roles: userReply.roles },
                        },
                    });
                }
            }
        }

        res.json(repliesWithParentComments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
