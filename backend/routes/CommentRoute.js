import express from "express"
import {
    createComment,
    replyToComment,
    getComments,
    updateComment,
    deleteComment,
} from "../controllers/CommentController.js"

const router = express.Router()

router.post('/comments', createComment)
router.post('/comments/:commentId/replies', replyToComment)
router.get('/comments', getComments)
router.put('/comments/:commentId', updateComment)
router.delete('/comments/:commentId', deleteComment)

module.exports = router
