import User from "../models/User.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const usersWithStrIds = users.map(user => ({
            ...user.toObject(),
            _id: user._id.toString()
        }));
        res.json(usersWithStrIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const userWithStrId = {
                ...user.toObject(),
                _id: user._id.toString()
            };
            res.json(userWithStrId);
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