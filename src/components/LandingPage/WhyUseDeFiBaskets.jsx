import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SaveTime from "../../assets/save-time.svg";
import SaveGas from "../../assets/save-gas.svg";
import NonCustodial from "../../assets/non-custodial.svg";

const WhyUseDeFiBaskets = () => (
  <Container>
    <Row className="justify-content-md-center" style={{ margin: "80px 0" }}>
      <h2>WHY USE DEFI ZAP?</h2>
    </Row>
    <Row>
      <Col>
      <div className="d-flex mb-4">
          <img
            src={SaveTime}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
            width="195px"
            alt="Save Time"
          />
        </div>
        <div className="d-flex mb-4">
          <h4>Save Time</h4>
        </div>
        <h6>
        Zap is a smart contract that auto-spreads incoming deposits across multiple 
        DeFi protocols in one transaction
        </h6>
      </Col>

      <Col>
      <div className="d-flex mb-4">
          <img
            src={SaveGas}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
            width="170px"
            alt="Save Time"
          />
        </div>
        <div className="d-flex mb-4">
          <h4>Save Gas</h4>
        </div>
        <h6>
          By bundling smart contract integration and utilizing{" "}
          <a
            href="https://gastoken.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            gastokens.io
          </a>{" "}
          we help and reduce users reduce transation fees.
        </h6>
      </Col>
      <Col>
      <div className="d-flex mb-4">
          <img
            src={NonCustodial}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
            width="125px"
            alt="Save Time"
          />
        </div>
        <div className="d-flex mb-4">
          <h4>Non-Custodial</h4>
        </div>
        <h6>
          Our smart contracts instantly return allocated DeFi tokens and you
          always maintain full-control of your assets.
          <br />
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            View our smart contract code here.
          </a>
        </h6>
      </Col>
    </Row>
  </Container>
);

export default WhyUseDeFiBaskets;
