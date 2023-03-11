const { isObjectEmpty } = require('./isObjectEmpty');

const shapeTheAnswerAllProducts = (response) => {

    if (!response) {
        return;
    }

    const { results, filters } = response;
    let categories = [];

    if (filters.length > 0) {
        categories = filters[0].values[0].path_from_root.map(category => category.name)
    }

    let items = results.map((item) => {
        const { id, title, currency_id, price, thumbnail, condition, shipping } = item;

        let formattedItem = {
            id,
            title,
            condition,
            picture: thumbnail,
            free_shipping: shipping.free_shipping,
            "price": {
                currency: currency_id,
                amount: price,
                decimals: 0
            }
        };

        return formattedItem;
    });

    let formatedResponse = {
        author: {
            name: "Antonella",
            lastname: "Di Virgilio"
        },
        categories,
        items
    };

    return formatedResponse;
};

const shapeTheAnswerProduct = (response) => {

    if (!response || response.length !== 2) {
        return;
    }

    const { id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity } = response[0];
    const { plain_text } = response[1];

    let formatedResponse = {
        author: {
            name: "Antonella",
            lastname: "Di Virgilio"
        },
        item: {
            id,
            "price": {
                currency: currency_id,
                amount: price,
                decimals: 0
            },
            picture: thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: plain_text,
            title
        }
    };

    return formatedResponse;
};

module.exports = { shapeTheAnswerAllProducts, shapeTheAnswerProduct }