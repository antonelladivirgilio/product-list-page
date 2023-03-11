import { useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import styles from './errorBoundary.module.scss';

export function ErrorBoundary() {
    const error = useRouteError();

    const navigate = useNavigate();

    const handleGoToHome = useCallback(() => {
        navigate(`/`);
    }, [navigate]);

    const HasErrorInfo = useCallback(() => {
        return (
            <div className={styles.container}>
                <h1 className={styles.h1}>Oops!</h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
                <Button onClick={handleGoToHome}>Ir a la página principal</Button>
            </div>
        )
    }, [error, handleGoToHome]);

    const NoErrorInfo = useCallback(() => {
        return (
            <>
                <div>Oops</div>
                <Button onClick={handleGoToHome}>Ir a la página principal</Button>
            </>
        )
    }, [handleGoToHome]);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    {
                        isRouteErrorResponse(error) ? <HasErrorInfo /> : <NoErrorInfo />
                    }
                </Col>
            </Row>
        </Container>
    )

}