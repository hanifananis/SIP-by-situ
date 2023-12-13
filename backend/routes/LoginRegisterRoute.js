import express from 'express';
import { registerUser, loginUser, logoutUser, getUserInfo } from '../controllers/LoginRegisterController.js';
import verifyTokenMiddleware from '../Middlewares/verifyTokenMiddleware.js';


const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);

router.get('/user-info', verifyTokenMiddleware, getUserInfo);

export default router;
