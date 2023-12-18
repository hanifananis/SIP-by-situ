import mongoose from 'mongoose';

const dpr2019Schema = new mongoose.Schema({
    Wilayah: {
        type: String,
        required: true,
    },
    PKB: {
        type: Number,
        required: true,
    },
    Gerindra: {
        type: Number,
        required: true,
    },
    PDIP: {
        type: Number,
        required: true,
    },
    Golkar: {
        type: Number,
        required: true,
    },
    NasDem: {
        type: Number,
        required: true,
    },
    Garuda: {
        type: Number,
        required: true,
    },
    Berkarya: {
        type: Number,
        required: true,
    },
    PKS: {
        type: Number,
        required: true,
    },
    Perindo: {
        type: Number,
        required: true,
    },
    PPP: {
        type: Number,
        required: true,
    },
    PSI: {
        type: Number,
        required: true,
    },
    PAN: {
        type: Number,
        required: true,
    },
    Hanura: {
        type: Number,
        required: true,
    },
    Demokrat: {
        type: Number,
        required: true,
    },
    PBB: {
        type: Number,
        required: true,
    },
    PKPI: {
        type: Number,
        required: true,
    },
});

dpr2019Schema.set('timestamps', true);

export default mongoose.model('DPR2019', dpr2019Schema);
