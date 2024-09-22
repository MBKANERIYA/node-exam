let express = require("express")
let categoryRoute = require("./catagories.routes")
let subcatagoryRoute = require("./subcatagories.routes")
let productRoute = require("./product.routes")
let adminRoute = require("./admin.routes")

let routes = express.Router()

routes.use("/category", categoryRoute)
routes.use("/subcategory", subcatagoryRoute)
routes.use("/product", productRoute)
routes.use("/admin", adminRoute)

module.exports = routes