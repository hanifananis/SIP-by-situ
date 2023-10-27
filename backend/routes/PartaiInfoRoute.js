import express from 'express';
import { getPartaiInfos, getPartaiInfoById, savePartaiInfo, updatePartaiInfo, deletePartaiInfo } from '../controllers/PartaiInfoController.js'; // Replace with the actual path to your controller file

const router = express.Router();

// Get all PartaiInfos
router.get('/partaiInfos', getPartaiInfos);

// Get a PartaiInfo by ID
router.get('/partaiInfos/:id', getPartaiInfoById);

// Create a new PartaiInfo
router.post('/partaiInfos', savePartaiInfo);

// Update a PartaiInfo by ID
router.put('/partaiInfos/:id', updatePartaiInfo);

// Delete a PartaiInfo by ID
router.delete('/partaiInfos/:id', deletePartaiInfo);

export default router;