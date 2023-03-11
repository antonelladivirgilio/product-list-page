import { useRef, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Card, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import shippingImg from '../../assets/ic_shipping_small.png';

import styles from './productList.module.scss';

export function ProductList({ products }) {

    const shippingTooltipImgRef = useRef();
    const navigate = useNavigate();

    const handleProductClick = useCallback((productId) => {
        navigate(`/items/${productId}`);
    }, [navigate]);

    const showList = products && products.length > 0;
    return (
        <>
            {
                showList &&
                <Row>
                    <Col>
                        <Card bsPrefix={styles.container}>
                            <ol>
                                {products.map((currentProduct, index) => {
                                    const { picture, title, id, price, free_shipping } = currentProduct;

                                    return (
                                        index < 4 &&
                                        <li onClick={() => handleProductClick(id)} key={id} className={styles.container_product}>
                                            <Container fluid>
                                                <Row>
                                                    <Col lg={3} md={4} xs={6}>
                                                        <Image className={styles.card_image} src={picture} alt={title} loading="lazy" />
                                                    </Col>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <span className={styles.card_price}>$ {price.amount}</span>
                                                                {
                                                                    free_shipping &&
                                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Este producto tiene envio gratis</Tooltip>}>
                                                                        <span className={`${styles.card_free_shipping_image} d-inline-block`}>
                                                                            <Image
                                                                                ref={shippingTooltipImgRef}
                                                                                src={shippingImg}
                                                                                loading="lazy" />
                                                                        </span>
                                                                    </OverlayTrigger>
                                                                }
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <h2 className={styles.card_description}>{title}</h2>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </li>
                                    )
                                })}
                            </ol>
                        </Card>
                    </Col>
                </Row>
            }
        </>)
}