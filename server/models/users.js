const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile:{
        type: String
    },
    picture:{
        type: String
    },
    about:{
        type: String
    },
    createdAt:{
        type: Date
    }
})

module.exports = userSchema;