const { subcategoryServices } = require("../services")

module.exports.createSubcategory = async (req, res) => {
    try {
        let body = req.body

        let duplicate = await subcategoryServices.findBySubcategory(body.subcategory)

        if (duplicate) {
            throw new Error("subcategory already exist")
        }

        let subcategory = await subcategoryServices.Create(body)

        res.status(201).json({
            message: "subcategory created successfully",
            subcategory
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.getSubcategory = async (req, res) => {
    try {
        let subcategories = await subcategoryServices.getAllSubcategory()

        res.status(200).json({
            message: "get all subcategory successfully",
            subcategories
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.deleteSubcategory = async (req, res) => {
    try {
        let { id } = req.params

        let deletedSubcategory = await subcategoryServices.findByIdAndDelete(id)

        if (!deletedSubcategory) {
            throw new Error("Subcategory not found")
        }

        res.status(200).json({
            message: "subcategory deleted successfully",
            deletedSubcategory
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.subcategoryUpdate = async (req, res) => {
    try {
        let body = req.body
        let { id } = req.params

        let newBody = {
            id,
            ...body
        }

        let updateSubcategory = await subcategoryServices.findByIdAndUpdate(id, body)

        if(!updateSubcategory){
            throw new Error("subcategory not found")
        }

        res.status(200).json({
            message: "subcategory updated successfully",
            newBody
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}