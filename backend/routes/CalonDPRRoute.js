import express from 'express';
import {
    createCalonDPR,
    getAllCalonDPRs,
    getCalonDPRById,
    updateCalonDPR,
    deleteCalonDPR,
} from '../controllers/CalonDPRController.js';

const router = express.Router();

// Create a new CalonDPR
router.post('/calonDPR', createCalonDPR);

// Get all CalonDPRs
router.get('/calonDPR', getAllCalonDPRs);

// Get a specific CalonDPR by ID
router.get('/calonDPR/:id', getCalonDPRById);

// Update a CalonDPR by ID
router.put('/calonDPR/:id', updateCalonDPR);

// Delete a CalonDPR by ID
router.delete('/calonDPR/:id', deleteCalonDPR);

export default router;
