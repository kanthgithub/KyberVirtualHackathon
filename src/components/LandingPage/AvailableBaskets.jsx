import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AvailableBaskets = () => (
<Container>
    <Row className="justify-content-md-center"><h5>AVAILABLE BASEKTS</h5></Row>
    <Row>
        <Col>
        Active Basket ETH
        </Col>

        <Col>
        Passive Basket ETH
        </Col>
        
        <Col>
        Short Term Bear ETH
        </Col>
    </Row>
</Container>
);

export default AvailableBaskets;
