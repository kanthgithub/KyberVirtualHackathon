import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
import AvailableZaps from './AvailableZapsView';
import Hero from './Hero';
import FAQView from '../Faq/FaqView';
import Footer from '../Footer';

const LandingPage = () => (
  <Container>
    <NavigationBar isLandingPage />
    <Hero />
    <WhyUseDeFiZap />
    <AvailableZaps />
    <Footer />
    <Container>
      <h2 className="pt-1 pb-1 text-center">Frequently Asked Questions</h2>
    </Container>
    <FAQView />
    <div className="text-center py-1 mb-2">
      <h4 className="pt-1">DeFiZap</h4>
      <div className="text-muted">All Rights Reserved</div>
    </div>
  </Container>
);

export default LandingPage;
