import { Outlet } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SearchBox } from "./components/SearchBox";
import styles from './app.module.scss';

export function App() {
  return (
    <Container fluid>
      <SearchBox />
      <Row>
        <Col className={styles.container_outlet}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
