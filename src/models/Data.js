const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    consumo: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    coste: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("consumo", dataSchema, "consumo")