const axios = require('axios');
const { shapeTheAnswerAllProducts, shapeTheAnswerProduct } = require("../utils/formatProductResponse");

const getAllProducts = async (query) => {

    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

    const response = await axios.get(apiUrl).then(res => res.data);

    const shapedAnswer = shapeTheAnswerAllProducts(response);
    return shapedAnswer;
};

const getProductById = async (id) => {

    const apiProductByIdUrl = `https://api.mercadolibre.com/items/${id}`;
    const apiProductDescriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;

    const allPromise = Promise.all([
        axios.get(apiProductByIdUrl).then(res => res.data),
        axios.get(apiProductDescriptionUrl).then(res => res.data)
    ]);

    const response = await allPromise;
    const shapedAnswer = shapeTheAnswerProduct(response);

    return shapedAnswer;
};

module.exports = {
    getAllProducts,
    getProductById
}