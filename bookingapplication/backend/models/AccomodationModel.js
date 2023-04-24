const mongoose = require("mongoose")

const accomodationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    desc: {
        type: String,
        required: true,
        minLength: 3
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
        default: "https://spacepattaya.com/assets/images/day_night/space-suite_night.jpg?v=46"
    }],
    wifi: {
        type: Boolean,
        default: true
    },
    pickup: {
        type: Boolean,
        default: true
    },
    allServices: {
        type: Boolean,
        default: true
    },
    telephone: {
        type: Boolean,
        default: true
    },

    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotels"
    }

});

module.exports = mongoose.model("Accomodations", accomodationSchema)