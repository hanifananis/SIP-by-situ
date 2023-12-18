import mongoose from 'mongoose';

const calonDPRSchema = new mongoose.Schema({
    no_urut_partai: { type: Number, required: true },
    dapil: { type: String, required: true },
    nama: { type: String, required: true },
    gender: { type: String, required: true },
    kota: { type: String, required: true },
    no_urut: { type: Number, required: true },
    url_foto: { type: String},
});

calonDPRSchema.set('timestamps', true);

export default mongoose.model('CalonDPR', calonDPRSchema);
