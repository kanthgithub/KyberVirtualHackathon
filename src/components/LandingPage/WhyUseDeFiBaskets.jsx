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
      <Row className="justify-content-md-center text-center ">
          <Col>
          <img
            src={SaveTime}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
            width="195px"
            alt="Save Time"
          />
          </Col>
          
          <Col>
          <img
            src={SaveGas}
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
            width="170px"
            alt="Save Time"
          />
          </Col>
          <Col>
          <img
              src={NonCustodial}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mr-3"
              width="125px"
              alt="Save Time"
            />
            </Col>
      </Row>
      <Row className="justify-content-md-center text-center ">
          <Col>
          <h4>Save Time</h4>
          </Col>
          <Col>
          <h4>Save Gas</h4>
          </Col>
          <Col>
          <h4>Non Custodial</h4>
          </Col>
      </Row>
      <Row className="justify-content-md-center text-center ">
      <Col>
      <h6>
      Zap is a smart contract that auto-spreads incoming deposits across multiple DeFi protocols based on pre-set allocations, bypassing many manual steps.
      </h6>
        </Col>
      <Col>
      <h6>
      Access all your favorite DeFi protocols and save up to 40% on transaction fees.
      <br />
      <a
              href="https://github.com/DeFiStrategies/KyberVirtualHackathon/tree/master/SmartContracts"
              rel="noopener noreferrer"
              target="_blank"
            >
              View our case study here.
            </a>
        </h6></Col>
        <Col>
          <h6>
          Zaps never hold your assets - you will instantly receive allocated DeFi tokens.
            <br />
            <a
              href="https://github.com/DeFiStrategies/KyberVirtualHackathon/tree/master/SmartContracts"
              rel="noopener noreferrer"
              target="_blank"
            >
              Review smart contract code.
            </a>
          </h6>
          </Col>
      </Row>
  </Container>
);

export default WhyUseDeFiBaskets;
