import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AVAILABLE_ZAPS } from "../../constants/AvailableZaps";
import ZapCardsView from "../ZapCards/ZapCardsView";

const AvailableBaskets = () => (
  <Container>
    <Row className="justify-content-md-center" style={{ marginBottom: "80px" }}>
      <h2>AVAILABLE ZAPS</h2>
    </Row>
    <Row>
      {Object.values(AVAILABLE_ZAPS).map((zap, i) => (
        <div key={i} className="col-12 col-md-4 col-lg-4">
          <ZapCardsView basketData={zap} />
        </div>
      ))}
    </Row>
    <Row>
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
