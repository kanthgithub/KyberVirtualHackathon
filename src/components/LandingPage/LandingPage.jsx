import React from "react";

import WhyUseDeFiBaskets from "./WhyUseDeFiBaskets";
import HowItWorks from "./HowItWorks";
import AvailableBaskets from "./AvailableBaskets";
import Hero from "./Hero";

const LandingPage = () => (
  <div>
    <Hero />
    <div className="container">
      <WhyUseDeFiBaskets />
      <HowItWorks />
      <AvailableBaskets />
    </div>
    <footer>
      <a href='/faq'>
        <p className="pt-1">Still have questions?  Head over to our FAQ section to get more information.</p>
      </a>
      <h4 className="pt-1">DeFi Zap</h4>
      <p className="pb-1 text-muted">All Rights Reserved</p>
    </footer>
  </div>
);

export default LandingPage;
