import express from 'express';
import { getPilpres2019Data, getHasilDPR2019Data} from '../controllers/KilasBalikController.js';

const router = express.Router();

// GET all pilpres2019 data
router.get('/datapilpres2019', getPilpres2019Data);
router.get('/datahasildpr2019', getHasilDPR2019Data);


export default router;
