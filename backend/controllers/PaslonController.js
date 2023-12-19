import Paslon from "../models/Paslon.js";
import PartaiInfo from "../models/PartaiInfo.js";

export const getPaslons = async (req, res) => {
    try {
        const paslons = await Paslon.find();
        const paslonsWithStrIds = paslons.map(paslon => ({
            ...paslon.toObject(),
            _id: paslon._id.toString()
        }));

        // Sort the array by the 'no_urut' property
        paslonsWithStrIds.sort((a, b) => a.no_urut - b.no_urut);

        res.json(paslonsWithStrIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPaslonById = async (req, res) => {
    try {
        const paslon = await Paslon.findById(req.params.id);
        const partaiList = await PartaiInfo.find({ usungPaslon: paslon.no_urut });
        
        const paslonWithPartai = {
            ...paslon.toObject(),
            _id: paslon._id.toString(),
            partaiInfo: partaiList
        };
        if (paslonWithPartai) {
            res.json(paslonWithPartai);
        } else {
            res.status(404).json({ message: "Paslon not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const savePaslon = async (req, res) => {
    console.log(req.body)
    const paslon = new Paslon(req.body);
    try {
        const insertedPaslon = await paslon.save();
        res.status(201).json(insertedPaslon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePaslon = async (req, res) => {
    try {
        const updatedPaslon = await Paslon.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedPaslon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePaslon = async (req, res) => {
    try {
        const deletedPaslon = await Paslon.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPaslon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
