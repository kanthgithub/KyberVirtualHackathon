import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

import One from '../../assets/one.png';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';

const HowItWorks = () => (
  <>
    <Row className="flex text-center justify-content-center mt-1 mb-1">
      <h2>How It Works?</h2>
    </Row>
    <Row className="justify-content-md-center text-center mb-3">
      <Col sm className="mb-1">
        <img src={One} className="" width="30%" alt="1" />
        <Col>PICK A ZAP</Col>
      </Col>
      <Col sm md lg>
        <img src={Two} className="" width="30%" alt="2" />
        <Col>SEND INVESTMENT AMOUNT</Col>
      </Col>
      <Col sm md lg>
        <img src={Three} className="" width="30%" alt="3" />
        <Col>RECEIVE ALLOCATED TOKENS</Col>
      </Col>
    </Row>
    <Container className="pt-2 pb-4">
      <ResponsiveEmbed aspectRatio="21by9" frameBorder="0">
        <iframe
          title="How DeFiZap works tutorial"
          src="https://www.youtube.com/embed/6kgaF3G8EVw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ResponsiveEmbed>
    </Container>
  </>
);

export default HowItWorks;
