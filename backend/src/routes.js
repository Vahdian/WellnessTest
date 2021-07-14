const express = require("express");
const controller = require("./controllers/controller")
const router = express.Router();

router
    .route("/data")
    .get(controller.getData)
    .post(controller.createData)

router.route("/data/:id")
    .get(controller.getOneData)
    .delete(controller.deleteData)
    .put(controller.updateData)

module.exports = router;
