import axios from 'axios';

export const getProducts = async ({ product }) => {

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/items?q=${product}`;

    // cancel the request
    const cancelGetProducts = new AbortController();

    const response = await axios.get(apiUrl, {
        signal: cancelGetProducts.signal
    }).then(res => res.data);

    return { response, cancelGetProducts };
}

export const getProductById = async (id) => {

    const apiUrl = `${process.env.REACT_APP_BASE_URL}/items/${id}`;

    // cancel the request
    const cancelGetProductById = new AbortController();

    const response = await axios.get(apiUrl, {
        signal: cancelGetProductById.signal
    }).then(res => res.data);

    return { response, cancelGetProductById };
}