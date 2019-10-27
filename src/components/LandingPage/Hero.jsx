import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../Navbar";
import "../../App.css";
import heroimg from "../../assets/hero.svg";

const Hero = () => (
  <div
    className="hero-image"
    style={{
      height: "1000px",
      marginBottom: "100px"
    }}
  >
    <div className="container" style={{ paddingTop: "150px" }}>
      <NavigationBar />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-md-6" style={{ marginTop: "150px" }}>
            <h1 className="text-light">Defi Zap</h1>
            <p className="lead text-center text-md-left text-light mb-6 mb-lg-8">
              Get instant exposure across multiple DeFi protocols based on your investment goals.
            </p>
            <div className="d-flex">
              <div className="text-center text-md-left">
                <Link
                  className="btn btn-light shadow lift mr-1 my-2 py-3 font20 px-4"
                  to="/survey"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={heroimg} alt="Welcome to Defi Zap" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
