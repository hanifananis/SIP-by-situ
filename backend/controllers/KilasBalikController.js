import Pilpres2019 from '../models/Pilpres2019.js';
import HasilDPR2019 from '../models/HasilDPR2019.js';

export const getPilpres2019Data = async (req, res) => {
    try {
        const pilpres2019Data = await Pilpres2019.find();
        res.json(pilpres2019Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getHasilDPR2019Data = async (req, res) => {
    try {
        const hasilDPR2019Data = await HasilDPR2019.find();
        res.json(hasilDPR2019Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export const createPilpres2019Data = async (req, res) => {
//     const { Wilayah, Capres_01, Capres_02 } = req.body;

//     try {
//         const newPilpres2019Data = new Pilpres2019({
//             Wilayah,
//             Capres_01,
//             Capres_02,
//         });

//         const pilpres2019Data = await newPilpres2019Data.save();
//         res.status(201).json(pilpres2019Data);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
