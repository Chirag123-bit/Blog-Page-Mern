const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    city: {
        type: String,
        required: true,
        minLength: 3
    },
    country: {
        type: String,
        required: true,
        minLength: 3
    },
    logo: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Marriott_hotels_logo14.svg/2560px-Marriott_hotels_logo14.svg.png"
    },

})

module.exports = mongoose.model("Hotels", hotelSchema)