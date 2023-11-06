import mongoose from "mongoose";

const Paslon = new mongoose.Schema({
    capres: {
        type: String,
        required: true,
    },
    cawapres: {
        type: String,
        required: true,
    },
    no_urut: {
        type: Number,
        required: true,
    },
    deskripsi: {
        type: String,
    },
    visi: {
        type: String,
    },
    misi: {
        type: String,
    },
    partai_pengusung: {
        type: String,
    },
    capres_img_url: {
        type: String,
    },
    cawapres_img_url: {
        type: String,
    },
});

Paslon.set('timestamps', true)

export default mongoose.model('Paslons', Paslon)
