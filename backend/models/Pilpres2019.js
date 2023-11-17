import mongoose from 'mongoose';


const pilpres2019Schema = new mongoose.Schema({
    Wilayah: {
        type: String,
        required: true,
    },
    Capres_01: {
        type: Number,
        required: true,
    },
    Capres_02: {
        type: Number,
        required: true,
    },
});

pilpres2019Schema.set('timestamps', true);

export default mongoose.model('Pilpres2019', pilpres2019Schema);
