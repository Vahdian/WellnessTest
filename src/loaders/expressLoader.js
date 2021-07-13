const express = require("express")
const routes = require("../routes")

function expressLoader(app){
    app.use(express.json());
    app.use(routes)
}

module.exports = expressLoader