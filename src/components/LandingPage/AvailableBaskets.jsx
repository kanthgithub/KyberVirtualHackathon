import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

import AvailableZaps from "../../constants/AvailableZaps";
import ZapCardsView from "../ZapCards/ZapCardsView";

const AvailableBaskets = () => (
  <Container>
    <Row className="justify-content-md-center" style={{ marginBottom: "80px" }}>
      <h2>AVAILABLE ZAPS</h2>
    </Row>
    <Row>
      {Object.values(AvailableZaps).map((zap, i) => (
        <div key={i} className="col-12 col-md-4 col-lg-4">
          <ZapCardsView basketData={zap} />
        </div>
      ))}
    </Row>
    <Row>
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <Button variant="outline-dark" href='/zaps' size="lg">
              View All Zaps
            </Button>
          </div>
        </div>
      </div>
    </Row>
  </Container>
);

export default AvailableBaskets;
