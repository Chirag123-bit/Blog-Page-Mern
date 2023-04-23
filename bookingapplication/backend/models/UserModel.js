const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minLength: 3
    },
    lname: {
        type: String,
        required: true,
        minLength: 3
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },

    role: {
        type: String,
        default: "user"
    },

    profilePic: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    }
});

module.exports = mongoose.model("Users", userSchema)
