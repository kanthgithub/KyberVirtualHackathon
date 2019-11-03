import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
import HowItWorks from './HowItWorks';
import AvailableZaps from './AvailableZapsView';
import Hero from './Hero';
import FAQView from '../Faq/FaqView';

const LandingPage = () => (
  <Container>
    <NavigationBar />
    <Hero />
    <WhyUseDeFiZap />
    <HowItWorks />
    <AvailableZaps />
    <Container>
      <h4 className="pt-1 pb-1 text-center">Frequently Asked Questions</h4>
    </Container>
    <FAQView />
    <footer>
      <h4 className="pt-1">DeFiZap</h4>
      <p className="pb-1 text-muted">All Rights Reserved</p>
    </footer>
  </Container>
);

export default LandingPage;
