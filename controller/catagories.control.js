const { categoryServices } = require("../services")

module.exports.createCategory = async (req, res) => {
    try {
        let body = req.body
        let duplicate = await categoryServices.findByCategoryName(body.categoryName)
        if (duplicate) {
            throw new Error("category already exist")
        }
        let category = await categoryServices.Create(body)
        res.status(201).json({
            message: "CATEGORY CREATED SUCCESSFULLY",
            category
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports.getCategory = async (req, res) => {
    try {
        let category = await categoryServices.findAllCategories()
        res.status(200).json({
            message: "GET ALL CATEGIRIES SUCCESSFULLY",
            category
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        let { id } = req.params
        let category = await categoryServices.findByIdAndDelete(id)

        if(!category){
            throw new Error("category not found");
        }

        res.status(200).json({
            message: "category delete successfully",
            category
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.updateCategory = async (req, res) => {
    try {
        let body = req.body
        let { id } = req.params

        let newBody = {
            id,
            ...body
        }

        let update = await categoryServices.findByIdAndUpdate(id, body)

        if(!update){
            throw new Error("category not found")
        }

        res.status(200).json({
            message: "ADMIN UPDATE SUCCESSFULLY",
            newBody
        })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}