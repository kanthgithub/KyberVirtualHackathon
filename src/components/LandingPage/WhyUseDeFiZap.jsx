import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SaveTime from '../../assets/save-time.svg';
import SaveGas from '../../assets/save-gas.svg';
import NonCustodial from '../../assets/non-custodial.svg';

const WhyUseDeFiZap = () => (
  <Container>
    <Row className="justify-content-center pt-5 pb-0">
      <h2>Why Use DeFiZap?</h2>
    </Row>
    <Row className="justify-content-center text-center">
      <Col sm md lg>
        <img src={SaveTime} width="137px" alt="Save Time" />
        <h5>Save Time</h5>
        <p>
          Zap is a smart contract that auto-spreads incoming deposits across
          multiple DeFi protocols in a single transaction and based on pre-set
          allocations - bypassing many manual steps.
        </p>
      </Col>
      <Col sm md lg>
        <img src={SaveGas} width="120px" alt="Save Time" />
        <h5>Save Gas</h5>
        <p>
          Access all your favorite DeFi protocols and save up to 40% on
          transaction fees.
          <br />
          <a
            href="https://defitutorials.substack.com/p/get-instant-exposure-across-multiple"
            rel="noopener noreferrer"
            target="_blank"
          >
            View our case study here.
          </a>
        </p>
      </Col>
      <Col sm md lg>
        <img src={NonCustodial} width="90px" alt="Save Time" />
        <h5>Non Custodial</h5>
        <p>
          DeFiZap smart contracts never hold your assets - you will instantly
          receive purchased assets.
          <br />
          <a
            href="https://github.com/DeFiStrategies/KyberVirtualHackathon/tree/master/SmartContracts"
            rel="noopener noreferrer"
            target="_blank"
          >
            Review smart contract code.
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default WhyUseDeFiZap;
