import argon2 from "argon2";
import User from "../models/User.js"
import validator from "validator";

const removePasswordFromUser = (user) => {
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  };
  
  export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      const usersWithoutPassword = users.map(removePasswordFromUser);
      res.json(usersWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  export const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        const userWithoutPassword = removePasswordFromUser(user);
        res.json(userWithoutPassword);
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

export const saveUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const insertuser = await user.save()
        res.status(201).json(insertuser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          res.status(404).json({ message: "User not found." });
        }

        // Validasi email
        if (req.body.email && !validator.isEmail(req.body.email)) {
          return res.status(400).json({ message: "Invalid email address." });
        }

        // Validasi password
        if (req.body.password && !isStrongPassword(req.body.password)) {
            return res.status(400).json({ message: "Password is not strong enough." });
        }

        // Validasi nomor telepon
        if (req.body.no_telp && !isPhoneNumber(req.body.no_telp)) {
            return res.status(400).json({ message: "Invalid phone number." });
        }
        if(req.body.name){
          const updatedName = req.body.name.trim(); // Remove leading and trailing whitespaces
          if (!updatedName) {
              return res.status(400).json({ message: "Name cannot be empty or consist only of whitespace." });
          }
        }
        if (req.body.password) {
          const hashedPassword = await argon2.hash(req.body.password);
          req.body.password = hashedPassword;
        }

        const updatedUser = await User.updateOne({_id:req.params.id}, {$set: req.body})
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          res.status(404).json({ message: "User not found." });
        }
        const deletedUser = await User.deleteOne({_id:req.params.id})
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

function isStrongPassword(password) {
  // Password must be at least 8 characters long
  // It must contain num and letter
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password);
}

function isPhoneNumber(phoneNumber) {
  // Phone number must contain only numbers and have at least 11 digits
  const phoneRegex = /^\d{10,13}$/;
  return phoneRegex.test(phoneNumber);
}