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
      <h4 className="pt-4">Defi Zap</h4>
      <p className="pb-4 text-muted">All Rights Reserved</p>
    </footer>
  </div>
);

export default LandingPage;
