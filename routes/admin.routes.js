let express = require("express");
const { adminController } = require("../controller");
const validate = require("../middleware/validation");
const { adminValidation } = require("../validations");
const { verifyToken, isAdmin } = require("../middleware/tokenVerify");

let route = express.Router();

route.post("/create" ,adminController.createAdmin);
route.post("/login", adminController.login);
route.get("/get", verifyToken, isAdmin, adminController.get_admin)


module.exports = route