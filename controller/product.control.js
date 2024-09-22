const { productServices } = require("../services")
const uploadImage = require("../services/cloudnary.services")

module.exports.addProduct = async (req, res) => {
    try {
        let body = req.body
        let { path, originalname } = req.file

        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            productImage: cloud.url
        }

        let result = await productServices.Create(newBody)
        res.status(201).json({
            message: "product added successfully",
            result
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        let result = await productServices.getAllProducts()

        res.status(200).json({
            message: "product get successfully",
            result
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        let { id } = req.params

        let result = await productServices.findByIdAndDelete(id)

        if (!result) {
            throw new Error("product not found")
        }
        res.status(200).json({
            message: "product delete successfully",
            result
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        let body = req.body
        let { id } = req.params
        let newBody = {
            id,
            ...body
        }

        let result = await productServices.findByIdAndUpdate(id, body)

        res.status(201).json({
            message: "product updated successfully",
            newBody
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}