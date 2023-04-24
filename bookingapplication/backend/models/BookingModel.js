const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    accomodation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accomodations"
    },
    status: {
        type: String,
        default: "Under-Review"
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Bookings", bookingSchema)