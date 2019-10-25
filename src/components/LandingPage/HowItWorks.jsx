import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HowItWorks = () => (
<Container>
    <Row className="justify-content-md-center"><h5>HOW IT WORKS?</h5></Row>
    <Row>
        <Col>
          <Row className="justify-content-md-center"><h1>1</h1></Row>
          <Row className="justify-content-md-center">PICK A BASKET</Row>
        </Col>
        <Col>
          <Row className="justify-content-md-center"><h1>2</h1></Row>
          <Row className="justify-content-md-center">SEND INVESTMENT AMOUNT</Row>
        </Col>
        <Col>
          <Row className="justify-content-md-center"><h1>3</h1></Row>
          <Row className="justify-content-md-center">RECEIVE ALLOCATED TOKENS</Row>
        </Col>
    </Row>
</Container>
);

export default HowItWorks;
