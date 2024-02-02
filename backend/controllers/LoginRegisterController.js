import User from "../models/User.js"; // Replace with the actual path to your User model
import Forum from "../models/Forum.js";
import Comment from "../models/Comment.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'
dotenv.config()
import validator from "validator";

export const registerUser = async (req, res) => {
    try {
        const { name, email, no_telp, password, confirmPassword } = req.body;
        const insertedName = req.body.name.trim(); // Remove leading and trailing whitespaces
        if (!insertedName) {
            return res.status(400).json({ message: "Name cannot be empty or consist only of whitespace." });
        }
        // Check if the passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const user = new User({
            name,
            email,
            password,
            no_telp,
        });

        // Save the user to the database
        await user.save();

        const token = generateToken(user);

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await argon2.verify(user.password, password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Password is correct; you can generate a token for authentication here
        const token = generateToken(user);
        res.status(200).json({ message: 'Login successful', token, roles: user.roles, user_id:user._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logoutUser = (req, res) => {
    // Invalidate the user's server-side session or token
    // Your server-side logout logic here
  
    // Send a response indicating the result
    res.status(200).json({ message: 'User logged out successfully' });
};
  
export const getUserInfo = async (req, res) => {
    try {
        // Retrieve user information based on the authenticated user's token
        const user = req.user;
        const userinfo = await User.findById(user.userId);
        const userforum = await Forum.find({ penulis_id : user.userId })
        const userComment = await Comment.find({ penulis_id : user.userId }).select('-replies');
        res.status(200).json({ 
            userinfo,
            userforum,
            userComment
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
        roles: user.roles,
    };

    const secretKey = 'bismillah-ppl2-ini-bisa-beres-2023'; // Replace with a secure secret key
    const options = {
        expiresIn: '1h', // Set the token's expiration time as needed
    };

    return jwt.sign(payload, secretKey, options);
};

export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        // Check if the new passwords match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New passwords do not match' });
        }

        // Find the user by ID
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the current password with the stored hashed password using argon2
        const isMatch = await argon2.verify(user.password, currentPassword);

        if (!isMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Hash the new password using argon2

        // Update the user's password
        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};