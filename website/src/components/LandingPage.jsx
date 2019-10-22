import React from "react";
import TrendPNG from "../assets/trend.png";
import ShapeOnePNG from "../assets/shape1.png";
import ShapeTwoPNG from "../assets/shape2.png";
import ShapeThreePNG from "../assets/shape3.png";
import { Link } from "react-router-dom";

import "../App.css";
import PercentageCircle from "./PercentageCircle";

const LandingPage = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand">
          <h2>DeFi Strategies</h2>
        </a>
        <Link to="/dashboard" className="btn btn-primary shadow ml-auto">
          Get Started
        </Link>
      </div>
    </nav>
    <section className="pt-5 pb-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src={TrendPNG}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="trend"
            />
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1">
            <h1 className="display-3 text-center text-md-left">
              Welcome to the world of{" "}
              <span className="text-primary">Decentralized Finance</span>
            </h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Allocate your money across Compound + TokenSets + Fulcrum +
              Synthetix + dYdX in one single transaction.
            </p>
            <div className="text-center text-md-left">
              <Link
                to="/dashboard"
                className="btn btn-primary shadow lift mr-1"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-5 pt-md-11 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 col-lg-5">
            <img
              src={ShapeOnePNG}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="trend"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-7">
            <h1 className="display-3 text-center text-md-left">
              Aggressive ETH
            </h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
              dapibus facilisis. Class aptent taciti sociosqu ad litora torquent
              per inceptos. Etiam libero eu nibh porttitor amet fermentum.
            </p>
            <div className="text-center text-md-left">
              <Link to="/dashboard" className="btn btn-dark shadow lift mr-1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 col-lg-5 order-md-2">
            <img
              src={ShapeTwoPNG}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="trend"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-7 order-md-2">
            <h1 className="display-3 text-center text-md-left">Moderate ETH</h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Ultrices dolor amet ultricies et condimentum. Magna sed etiam
              consequat, et lorem adipiscing sed dolor sit amet, consectetur
              amet do eiusmod tempor incididunt ultrices gravida.
            </p>
            <div className="text-center text-md-left">
              <Link to="/dashboard" className="btn btn-dark shadow lift mr-1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 col-lg-5">
            <img
              src={ShapeThreePNG}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="trend"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-7">
            <h1 className="display-3 text-center text-md-left">
              Conservative ETH
            </h1>
            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              etiam sed facilisis ante interdum congue. Integer mollis, nisl
              amet convallis, porttitor magna ullamcorper, amet mauris.
            </p>
            <div className="text-center text-md-left">
              <Link to="/dashboard" className="btn btn-dark shadow lift mr-1">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
