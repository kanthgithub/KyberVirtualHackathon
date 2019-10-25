import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from './Navbar';
import WhyUseDeFiBaskets from  './WhyUseDeFiBaskets';
import HowItWorks from './HowItWorks';
import AvailableBaskets from './AvailableBaskets';
import Row from 'react-bootstrap/Row';

const LandingPage = () => (
  <Container>
    <NavigationBar />
    <hr />
    <WhyUseDeFiBaskets />
    <hr />
    <HowItWorks />
    <hr />
    <AvailableBaskets />
    <hr />
    <Row className="justify-content-md-center">
      <a href = "https://google.com"> FAQ</a>
    </Row>
  </Container>
);

export default LandingPage;
