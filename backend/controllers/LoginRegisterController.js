import User from "../models/User.js"; // Replace with the actual path to your User model
import argon2 from 'argon2';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {
    try {
        const { name, email, no_telp, password, confirmPassword } = req.body;

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

        const decoded = jwt.verify(token, 'bismillah-ppl2-ini-bisa-beres-2023');
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
        res.status(200).json({ userinfo });
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
