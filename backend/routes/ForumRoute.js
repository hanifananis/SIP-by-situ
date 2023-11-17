import express from 'express';
import {
  getForums,
  getForumById,
  createForum,
  updateForum,
  deleteForum,
  createComment,
  updateComment,
  deleteComment,
  createReply,
  updateReply,
  deleteReply,
} from '../controllers/ForumController.js';

const router = express.Router();

// Forums
router.get('/forums', getForums);
router.get('/forums/:id', getForumById);
router.post('/forums', createForum);
router.put('/forums/:id', updateForum);
router.delete('/forums/:id', deleteForum);

// Comments
router.post('/comments', createComment);
router.put('/comments', updateComment);
router.delete('/comments/:forumId/:commentId', deleteComment);

// Replies
router.post('/replies', createReply);
router.put('/replies', updateReply);
router.delete('/replies/:forumId/:commentId/:replyId', deleteReply);

export default router;
