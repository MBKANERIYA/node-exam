let express = require("express")
const { productController } = require("../controller")
const validate = require("../middleware/validation")
const { productValidation } = require("../validations")
const upload = require("../middleware/upload")

let route = express.Router()
route.post("/create",upload.single("productImage"), validate(productValidation), productController.addProduct)
route.get("/get", productController.getProduct)
route.delete("/delete/:id", productController.deleteProduct)
route.put("/update/:id", validate(productValidation), productController.updateProduct)
module.exports = route