import { useCallback, useState, useEffect, Suspense, useDeferredValue } from 'react';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useLocation, useNavigate } from "react-router-dom";

import { useCategoryContext } from '../../contexts/categoryContext';
import { getProducts } from '../../services/products';

import { Container, Row, Col } from 'react-bootstrap';

export function Results() {

    const { state, search } = useLocation();
    const [products, setProducts] = useState({
        categories: [],
        items: []
    });
    const deferredProducts = useDeferredValue(products);

    const { setCategories } = useCategoryContext();

    const navigate = useNavigate();

    const getResults = useCallback(async (query) => {

        if (query) {
            try {
                const { response, cancelGetProducts } = await getProducts({ product: query });

                const { categories, items } = response.data;
                setProducts({ categories, items });
                setCategories(categories);

                return cancelGetProducts.abort();
            } catch (error) {
                navigate(`/error`);
            }
        }
    }, [setCategories, navigate]);

    useEffect(() => {
        const currentState = state ? state : search.split('=')[1];
        getResults(currentState);
    }, [getResults, state, search]);

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumbs categories={deferredProducts.categories} />
                    </Col>
                </Row>
                <ProductList products={deferredProducts.items} />
            </Container>
        </Suspense>
    );
}