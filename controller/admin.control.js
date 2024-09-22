const { adminServices } = require("../services");
let jwt = require("jsonwebtoken");


let createAdmin = async (req, res) => {
    try {
        let body = req.body
        console.log(req.body,"adim");
       
        let admin = await adminServices.adminCreate(body)
        console.log(admin,"for service");
        res.status(201).json({
            message: "CATEGORY CREATED SUCCESSFULLY",
            admin
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let admin = await adminServices.findByemail(email)
        if (!user) {
            throw new Error("please enter valid email")
        }

        if (user.password !== password) {
            throw new Error("please enter valid password")
        }
        let token = await jwt.sign({ admin }, "dipen", { expiresIn: "1d" })

        res.status(200).json({
            message: "login success",
            admin,
            token
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let get_admin = async (req, res) => {
    try {
        let admin = await adminServices.findAllAdmin()
        res.status(200).json({
            message: "get user success",
            admin
        })
    } catch (err) {
        res.status(500).json({ err: message })
    }
}

module.exports = { createAdmin, login, get_admin }