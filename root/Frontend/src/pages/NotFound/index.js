import { useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import styles from './notFound.module.scss';

export function NotFound() {

    const navigate = useNavigate();

    const handleGoToHome = useCallback(() => {
        navigate(`/`);
    }, [navigate]);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Parece que esta página no existe</h1>
                        <Button onClick={handleGoToHome}>Ir a la página principal</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}