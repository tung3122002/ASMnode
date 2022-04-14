import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

userSchema.methods = {
        authenticate(password) { //123456
            return this.password == this.encrytPassword(password);
        },
        encrytPassword(password) {
            if (!password) return
            try {
                return createHmac("sha256", "abcs").update(password).digest("hex");
            } catch (error) {
                console.log(error)
            }
        }
    }
    // trước khi execute .save() thì chạy middleware sau.
userSchema.pre("save", function(next) {

    try {
        this.salt = uuidv4();
        this.password = this.encrytPassword(this.password);
        next();
    } catch (error) {

    }
})
export default mongoose.model('User', userSchema);