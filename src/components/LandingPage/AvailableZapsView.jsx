import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import AvailableZaps from '../../constants/AvailableZaps';
import ZapCardsView from '../ZapCards/ZapCardsView';

const AvailableZapsView = () => (
  <Container>
    <Row className="justify-content-md-center mb-2">
      <h2>Available Zaps</h2>
    </Row>
    <Row>
      {Object.values(AvailableZaps).map(zap => (
        <div key={zap.id} className="col-md-6 col-lg-6">
          <ZapCardsView basketData={zap} />
        </div>
      ))}
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <Button variant="info" href="/zaps" size="lg" block>
              View All Zaps
            </Button>
          </div>
        </div>
      </div>
    </Row>
    <br />
  </Container>
);

export default AvailableZapsView;
