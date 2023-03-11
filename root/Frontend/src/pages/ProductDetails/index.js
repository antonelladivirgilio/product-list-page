import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { useCategoryContext } from '../../contexts/categoryContext';
import { getProductById } from '../../services/products';

import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { isObjectEmpty } from '../../utilities/isObjectEmpty';

import styles from './productDetails.module.scss';

export function ProductDetails() {

    let { id } = useParams();
    const [product, setProduct] = useState({});
    const { categories } = useCategoryContext();

    const conditionTable = {
        new: 'Nuevo',
        used: 'Usado'
    };

    const callService = useCallback(async (id) => {

        if (id) {
            try {
                const { response, cancelGetProductById } = await getProductById(id);
                const { item } = response.data;
                setProduct(item);

                return cancelGetProductById.abort();
            }
            catch (error) {

            }
        }
    }, []);

    useEffect(() => {
        callService(id);
    }, [id, callService]);

    return (
        <>
            {
                !isObjectEmpty(product) &&
                <Container>
                    <Breadcrumbs categories={categories} />
                    <Row>
                        <Col>
                            <Card bsPrefix={styles.container}>
                                <Container>
                                    <Row>
                                        <Col md={8} xs={6} >
                                            <Row>
                                                <Col>
                                                    <Image className={styles.card_image} src={product.picture} alt={product.title} loading="lazy" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={4} xs={6} className={styles.right_container}>
                                            <span className={styles.header_subtitle}>
                                                {`${conditionTable[product.condition]}`}
                                                {product.sold_quantity > 0 && ` - ${product.sold_quantity} vendidos`}
                                            </span>
                                            <h1 className={styles.product_title}>{product.title}</h1>
                                            <p className={styles.product_price}>$ {product.price.amount}</p>
                                            <div className='d-grid'>
                                                <Button variant="primary" className={styles.product_buy_btn}>Comprar</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>
                                            <h2 className={styles.description_title}>Descripción del producto</h2>
                                            <p className={styles.description_content}>{product.description ? product.description : "El vendedor no agregó una descripción"}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container >
            }
        </>
    )
}