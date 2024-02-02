import mongoose from "mongoose";

const partaiInfo = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    no_urut: {
        type: Number,
        index: { unique: true },
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: "no_urut must be greater than 0.",
        },
    },
    ig_sosmed: {
        type: String,
    },
    fb_sosmed: {
        type: String,
    },
    x_sosmed: {
        type: String,
    },
    website: {
        type: String,
    },
    url_api_wikipedia: {
        type: String,
    },
    deskripsi: {
        type: String,
    },
    koalisi: {
        type: String,
    },
    foto: {
        type: String,
    },
    usungPaslon:{
        type: Number
    }
    
});

partaiInfo.set('timestamps', true)

export default mongoose.model('PartaiInfos', partaiInfo)
