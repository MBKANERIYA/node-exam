let express = require("express");
const validate = require("../middleware/validation");
const { subcategoryValidation } = require("../validations");
const { subcategoryController } = require("../controller");

let route = express.Router()

route.post("/create", validate(subcategoryValidation), subcategoryController.createSubcategory)
route.get("/get", subcategoryController.getSubcategory)
route.delete("/delete/:id", subcategoryController.deleteSubcategory)
route.put("/update/:id", validate(subcategoryValidation), subcategoryController.subcategoryUpdate)

module.exports = route