import mongoose, { Schema, ObjectId } from "mongoose"

const cartSchame = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    quantiny: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        // required: true
    },
    size: {
        type: String,
        // required: true
    },

}, { timestamps: true })

export default mongoose.model("Cart", cartSchame)