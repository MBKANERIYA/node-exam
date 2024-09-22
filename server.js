require("dotenv").config()
let express = require("express")
let bodyParser = require("body-parser")
let http = require("http")
const { dbConnect } = require("./DB/dbConnect")
const routes = require("./routes")
let cors = require("cors")
let app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/v1", routes)

dbConnect()
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON ${process.env.PORT}`);
})
