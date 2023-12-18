import User from "../models/User.js"

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
        const updatedUser = await User.updateOne({_id:req.params.id}, {$set: req.body})
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id:req.params.id})
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}