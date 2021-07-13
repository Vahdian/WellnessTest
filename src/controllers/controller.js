const Data = require("../models/Data")

async function getData(req, res, next){
    try{
    const allData = await Data.find()
    res.send(allData)
    console.info(allData)
    next()
    }
    catch{
        console.info("no va")
    }
}

async function createData(req, res, next){
    try {
        const newData = new Data();
            newData.fecha = req.body.fecha;
            newData.hora = req.body.hora;
            newData.consumo = req.body.consumo;
            newData.precio = req.body.precio;
            newData.coste = req.body.coste;
        const savedData = await newData.save();
        res.send({ Data: savedData._id });
        console.log("New electricy bill data entry saved correctly");
      } catch (err) {
        console.error(err);
        res.send("Error saving the electricy bill in the database");
      }
}

async function deleteData(req, res, next) {
    const id = req.params.id;
    await Data.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete electricy bill data entry with id=${id}.`,
          });
        } else {
          res.send({
            message: "Electricity bill data entry was deleted successfully!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete electricity bill data entry with id=" + id,
        });
      });
  }

  async function updateData(req, res, next) {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update electricity bill data entry with id=${id}.`,
          });
        } else res.send({ message: "Electricity bill data entry was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating electricity bill data entry with id=" + id,
        });
      });
  }

module.exports = { getData, createData, deleteData, updateData}