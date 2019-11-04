import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../App.css';
import heroimg from '../../assets/hero.svg';

const Hero = () => (
  <Container>
    <Row>
      <Col sm={12} md={6} lg={6}>
        <Row className="pt-5">
          <h1>DeFiZap</h1>
          <h5>
            <sup>Beta</sup>
          </h5>
        </Row>
        <Row className="pt-3">
          <h4 className="lead">
            Get instant exposure across multiple DeFi protocols based on your
            investment goals.
          </h4>
        </Row>
        <Row>
          <Button
            variant="light"
            href="/survey"
            className="shadow lift mr-1 my-2 py-3 font20 px-4"
          >
            Get Started
          </Button>
        </Row>
      </Col>
      <Col sm={8} md={6} lg={6}>
        <img width="100%" src={heroimg} alt="Welcome to DeFiZap" />
      </Col>
    </Row>
  </Container>
);

export default Hero;

/**
 * 
 * 

 */
