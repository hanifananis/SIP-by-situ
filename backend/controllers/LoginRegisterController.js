import User from "../models/User.js"; // Replace with the actual path to your User model
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

export const registerUser = async (req, res) => {
    try {
        console.log(req.body)
        
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
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'An error occurred' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Password is correct; you can generate a token for authentication here
            const token = generateToken(user);

            res.status(200).json({ message: 'Login successful', token });
        });
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
  

function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
        // Add any additional claims (user roles, etc.) as needed
    };

    const secretKey = 'your-secret-key'; // Replace with a secure secret key
    const options = {
        expiresIn: '1h', // Set the token's expiration time as needed
    };

    return jwt.sign(payload, secretKey, options);
};
