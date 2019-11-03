import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../App.css';
import heroimg from '../../assets/hero.svg';

const Hero = () => (
  <div className="container-flex">
    <div className="row">
      <div
        className="col-6 "
        style={{ alignSelf: 'center' }}
      >
        <div className="row">
          <p className="h1">DeFiZap
          <sup>Beta</sup>
          </p>
          <p className="lead">
            Get instant exposure across multiple DeFi protocols based on your
            investment goals.
          </p>
          <Button
            variant="light"
            href="/survey"
            className="shadow lift mr-1 my-2 py-3 font20 px-4"
          >
            Get Started
          </Button>
        </div>
        <div className="row">
          <br />
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
      <div className="col-6" >
        <img
          src={heroimg}
          style={{ width: '100%', height: 'auto' }}
          alt="Welcome to DeFiZap"
        />
      </div>
    </div>
  </div>
);

export default Hero;
