import CalonDPR from '../models/CalonDPR.js';

// Create a new CalonDPR
export const createCalonDPR = async (req, res) => {
    try {
        const newCalonDPR = await CalonDPR.create(req.body);
        res.status(201).json(newCalonDPR);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all CalonDPRs
export const getAllCalonDPRs = async (req, res) => {
    try {
        const calonDPRs = await CalonDPR.find();
        res.json(calonDPRs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific CalonDPR by ID
export const getCalonDPRById = async (req, res) => {
    try {
        const calonDPR = await CalonDPR.findById(req.params.id);
        if (!calonDPR) {
            return res.status(404).json({ message: "CalonDPR not found." });
        }
        res.json(calonDPR);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a CalonDPR by ID
export const updateCalonDPR = async (req, res) => {
    try {
        const updatedCalonDPR = await CalonDPR.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedCalonDPR) {
            return res.status(404).json({ message: "CalonDPR not found." });
        }
        res.json(updatedCalonDPR);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a CalonDPR by ID
export const deleteCalonDPR = async (req, res) => {
    try {
        const deletedCalonDPR = await CalonDPR.findByIdAndDelete(req.params.id);
        if (!deletedCalonDPR) {
            return res.status(404).json({ message: "CalonDPR not found." });
        }
        res.json(deletedCalonDPR);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
