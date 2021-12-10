const mongoose = require('moongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength:[30," Your name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email'],
        validate:[validator.isEmail,'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required:true
        },
        url: {
            type: String,
            required:true
        }
    },
    role: {
        type: String,
        default:"user"
    },
    createdAt: {
        type: Date,
        default:Date
    },
    resetPasswordToken: String,
    resetpasswordExpire:Date
})

module.exports = mongoose.model('User', userSchema); 