import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import Three from "../../assets/three.png";

const HowItWorks = () => (
  <Container style={{ marginBottom: "200px" }}>
    <Row className="justify-content-md-center" style={{ margin: "80px 0" }}>
      <h2>HOW IT WORKS?</h2>
    </Row>
    <Row className="my-5">
      <Col>
        <Row className="justify-content-md-center mb-1">
          <img
            src={One}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
            width="100px"
            alt="1"
          />
        </Row>
        <Row className="justify-content-md-center">PICK A BASKET</Row>
      </Col>
      <Col>
        <Row className="justify-content-md-center mb-3">
          <img
            src={Two}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
            width="90px"
            alt="2"
          />
        </Row>
        <Row className="justify-content-md-center">SEND INVESTMENT AMOUNT</Row>
      </Col>
      <Col>
        <Row className="justify-content-md-center mb-1">
          <img
            src={Three}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
            width="100px"
            alt="3"
          />
        </Row>
        <Row className="justify-content-md-center">
          RECEIVE ALLOCATED TOKENS
        </Row>
      </Col>
    </Row>
  </Container>
);

export default HowItWorks;
