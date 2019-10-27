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
    <Row className="justify-content-md-center text-center  mb-3">
      <Col className="mb-1">
        <img
          src={One}
          className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
          width="100px"
          alt="1"
        />
      </Col>
      <Col>
        <img
          src={Two}
          className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
          width="90px"
          alt="2"
        />
      </Col>
      <Col>
        <img
          src={Three}
          className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
          width="100px"
          alt="3"
        />
      </Col>
    </Row>
    <Row className="justify-content-md-center text-center ">
      <Col>PICK A ZAP</Col>
      <Col>SEND INVESTMENT AMOUNT</Col>
      <Col>RECEIVE ALLOCATED TOKENS</Col>
    </Row>
    <div className="row justify-content-center my-5">
      <iframe
        title="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L3wKzyIN1yk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Container>
);

export default HowItWorks;
