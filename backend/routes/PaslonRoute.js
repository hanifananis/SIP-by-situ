import express from 'express';
import { getPaslons, getPaslonById, savePaslon, updatePaslon, deletePaslon } from '../controllers/PaslonController.js';

const router = express.Router();

// Get all Paslons
router.get('/paslons', getPaslons);

// Get a Paslon by ID
router.get('/paslons/:id', getPaslonById);

// Create a new Paslon
router.post('/paslons', savePaslon);

// Update a Paslon by ID
router.put('/paslons/:id', updatePaslon);

// Delete a Paslon by ID
router.delete('/paslons/:id', deletePaslon);

export default router;
