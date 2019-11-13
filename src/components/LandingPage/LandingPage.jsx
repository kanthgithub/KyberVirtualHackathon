import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
// import HowItWorks from './HowItWorks';
import AvailableZaps from './AvailableZapsView';
import Hero from './Hero';
import FAQView from '../Faq/FaqView';
import Footer from '../Footer';

const LandingPage = () => (
  <Container>
    <NavigationBar isLandingPage />
    <Hero />
    <WhyUseDeFiZap />
    {/* <HowItWorks /> */}
    <AvailableZaps />
    <Container>
      <h4 className="pt-1 pb-1 text-center">Frequently Asked Questions</h4>
    </Container>
    <FAQView />
    <Footer />
  </Container>
);

export default LandingPage;
