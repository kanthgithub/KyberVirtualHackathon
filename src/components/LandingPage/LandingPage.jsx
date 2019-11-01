import React from "react";

import WhyUseDeFiBaskets from "./WhyUseDeFiBaskets";
import HowItWorks from "./HowItWorks";
import AvailableBaskets from "./AvailableBaskets";
import Hero from "./Hero";
import FAQView from '../Faq/FaqView';
import Container from "react-bootstrap/Container";

const LandingPage = () => (
  <div>
    <Hero />
    <div className="container">
      <WhyUseDeFiBaskets />
      <HowItWorks />
      <AvailableBaskets />
      <Container>
        <h4 className="pt-1">Frequently Asked Questions</h4>
      </Container>
      <FAQView />
    </div>
    <footer>
      <h4 className="pt-1">DeFiZap</h4>
      <p className="pb-1 text-muted">All Rights Reserved</p>
    </footer>
  </div>
);

export default LandingPage;
