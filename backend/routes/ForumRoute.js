// routes.js
import express from 'express';
import {
  getAllForums,
  getForumById,
  createForum,
  editForum,
  deleteForum,
  createComment,
  addReply,
  editCommentOrReply,
  deleteCommentOrReply,
  getAllCommentWithReply
} from '../controllers/ForumController.js';

const router = express.Router();

// Forum routes
router.get('/forums', getAllForums);
router.get('/forums/:forumId', getForumById);
router.post('/forums', createForum);
router.put('/forums/:forumId', editForum);
router.delete('/forums/:forumId', deleteForum);

// Comment routes
router.get('/comments', getAllCommentWithReply);
router.post('/comments', createComment);
router.post('/comments/:commentId/replies', addReply);
router.put('/comments/:commentId/:replyId?', editCommentOrReply);
router.delete('/comments/:commentId/:replyId?', deleteCommentOrReply);

export default router;
