const data = require("../models/Data")

async function getData(req, res, next){
    try{
    const allData = await data.find()
    res.send(allData)
    console.info("tira")
    next()
    }
    catch{
        console.info("no va")
    }
}

async function createData(req, res, next){
    res.send("New shit created")
    next();
}

module.exports = { getData, createData}