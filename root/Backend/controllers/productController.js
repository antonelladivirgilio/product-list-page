const productServices = require("../services/productService");

const getAllProducts = async (request, response) => {
    const { q } = request.query;
    let allProducts = [];

    try {
        allProducts = await productServices.getAllProducts(q);
    } catch (error) {
        response
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } })
    }

    response.send({
        status: '200', data: allProducts
    });
};

const getProductById = async (request, response) => {
    const { id } = request.params;

    let productById = {};

    try {
        productById = await productServices.getProductById(id);
    } catch (error) {
        response
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } })
    }    

    response.send({
        status: '200', data: productById
    });
};

module.exports = {
    getAllProducts,
    getProductById
}