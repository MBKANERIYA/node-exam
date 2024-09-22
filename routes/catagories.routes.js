let express = require("express")
const validate = require("../middleware/validation")
const { categoryValidation } = require("../validations")
const { categoryController } = require("../controller")

let route = express.Router()
route.post("/create", validate(categoryValidation), categoryController.createCategory)
route.get("/get", categoryController.getCategory)
route.delete("/delete/:id", categoryController.deleteCategory)
route.put("/update/:id", validate(categoryValidation), categoryController.updateCategory)

module.exports = route