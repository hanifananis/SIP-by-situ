import PartaiInfo from "../models/PartaiInfo.js";

export const getPartaiInfos = async (req, res) => {
    try {
        const partaiInfos = await PartaiInfo.find();
        res.json(partaiInfos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPartaiInfoById = async (req, res) => {
    try {
        const partaiInfo = await PartaiInfo.findById(req.params.id);
        res.json(partaiInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const savePartaiInfo = async (req, res) => {
    console.log(req.body)
    const partaiInfo = new PartaiInfo(req.body);
    try {
        const insertedPartaiInfo = await partaiInfo.save();
        res.status(201).json(insertedPartaiInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePartaiInfo = async (req, res) => {
    try {
        const updatedPartaiInfo = await PartaiInfo.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedPartaiInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePartaiInfo = async (req, res) => {
    try {
        const deletedPartaiInfo = await PartaiInfo.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPartaiInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}