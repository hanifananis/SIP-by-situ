import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/LoginRegisterController.js'; // Replace with the actual path to your controller file

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);


export default router;
