const express = require("express");

const route = express.Router();

const TenderController = require("../Controllers/TenderController");

// TenderController route
route.post("/insert", TenderController.Tender_insert)
route.get("/getAll", TenderController.getTenders)
route.get("/get/:id", TenderController.getTenderById)
route.post("/update/:id", TenderController.updateTender)
route.get("/delete/:id", TenderController.deleteTender)

module.exports = route;
