const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    Fecha: {
        type: String,
        required: true
    },
    Hora: {
        type: String,
        required: true
    },
    Consumo: {
        type: String,
        required: true
    },
    Precio: {
        type: String,
        required: true
    },
    Coste: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Data", dataSchema)