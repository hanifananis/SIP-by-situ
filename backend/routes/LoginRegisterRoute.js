import express from 'express';
import { registerUser, loginUser, logoutUser, getUserInfo, changePassword } from '../controllers/LoginRegisterController.js';
import verifyTokenMiddleware from '../Middlewares/verifyTokenMiddleware.js';


const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);

// User info route
router.get('/user-info', verifyTokenMiddleware, getUserInfo);

// User change password route
router.post('/change-password', verifyTokenMiddleware, changePassword);

export default router;
