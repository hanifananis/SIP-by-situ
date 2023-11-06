import Paslon from "../models/Paslon.js";

export const getPaslons = async (req, res) => {
    try {
        const paslons = await Paslon.find();
        res.json(paslons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPaslonById = async (req, res) => {
    try {
        const paslon = await Paslon.findById(req.params.id);
        res.json(paslon);
    } catch (error) {
        res.status(404).json({ message: error.message });
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
