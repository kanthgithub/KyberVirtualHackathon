import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PercentageCircle from "../PercentageCircle";

const AvailableBaskets = () => (
  <Container>
    <Row className="justify-content-md-center" style={{ marginBottom: "80px" }}>
      <h2>AVAILABLE ZAPS</h2>
    </Row>
    <Row>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-10">
                <h1 className="text-center my-4 lender">Lender</h1>
              </div>
              <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                <div>
                  <PercentageCircle percentage={85} color="#1314ad" />
                  <h6 className="text-center mt-3">cDAI</h6>
                </div>
                <div>
                  <PercentageCircle percentage={15} color="#1314ad" />
                  <h6 className="text-center mt-3">ETHHIVOL</h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-12 col-md-12 col-lg-12 text-center ">
                <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                  Buy Zap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-10">
                <h1 className="text-center my-4 longTermBull">Lender</h1>
              </div>
              <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                <div>
                  <PercentageCircle percentage={85} color="#4bc0c0" />
                  <h6 className="text-center mt-3">cDAI</h6>
                </div>
                <div>
                  <PercentageCircle percentage={15} color="#4bc0c0" />
                  <h6 className="text-center mt-3">ETHHIVOL</h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-12 col-md-12 col-lg-12 text-center ">
                <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                  Buy Zap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-10">
                <h1 className="text-center my-4 shortTermSwings">Lender</h1>
              </div>
              <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                <div>
                  <PercentageCircle percentage={85} color="#262626" />
                  <h6 className="text-center mt-3">cDAI</h6>
                </div>
                <div>
                  <PercentageCircle percentage={15} color="#262626" />
                  <h6 className="text-center mt-3">ETHHIVOL</h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-12 col-md-12 col-lg-12 text-center ">
                <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                  Buy Zap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <Link
              to="/zaps"
              className="font20 btn btn-dark btn-large shadow rounded-pill px-4 py-2 "
            >
              View All Zaps
            </Link>
          </div>
        </div>
      </div>
    </Row>
  </Container>
);

export default AvailableBaskets;
