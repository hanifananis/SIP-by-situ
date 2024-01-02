import PartaiInfo from "../models/PartaiInfo.js";
import CalonDPR from "../models/CalonDPR.js";

export const getPartaiInfos = async (req, res) => {
    try {
        const partaiInfos = await PartaiInfo.find().sort({no_urut: 1});
        const partaiInfosWithStrIds = partaiInfos.map(info => {
            return {
                ...info.toObject(),
                _id: info._id.toString()
            };
        });
        res.json(partaiInfosWithStrIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPartaiInfoById = async (req, res) => {
    try {
        const partaiInfo = await PartaiInfo.findById(req.params.id);
        if (partaiInfo) {
            const calonDPRs = await CalonDPR.find({ no_urut_partai: partaiInfo.no_urut });

            const partaiInfoWithStrId = {
                ...partaiInfo.toObject(),
                _id: partaiInfo._id.toString(),
                calonDPRs
            };
            res.json(partaiInfoWithStrId);
        } else {
            res.status(404).json({ message: "PartaiInfo not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        const partaiInfo = await PartaiInfo.findById(req.params.id);
        if (!partaiInfo) {
            res.status(404).json({ message: "PartaiInfo not found." });
        }   
        if (req.body.name !== undefined){
            const updatedName = req.body.name.trim(); // Remove leading and trailing whitespaces
            if (updatedName === "") {
                return res.status(400).json({ message: "Name cannot be empty or consist only of whitespace." });
            }
          }
        const updatedPartaiInfo = await PartaiInfo.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedPartaiInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePartaiInfo = async (req, res) => {
    try {
        const partaiInfo = await PartaiInfo.findById(req.params.id);
        if (!partaiInfo) {
            res.status(404).json({ message: "PartaiInfo not found." });
        }
        const deletedPartaiInfo = await PartaiInfo.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPartaiInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}