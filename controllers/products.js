const getAllProducts = (req, res) => {
    res.status(200).json({
        success: true
    })
}

module.exports = {
    getAllProducts
}