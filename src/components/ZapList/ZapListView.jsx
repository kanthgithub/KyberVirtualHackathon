import React from 'react';
import Container from 'react-bootstrap/Container';

import ZapFullView from '../Baskets/ZapFullView';
import NavigationBar from '../NavigationBar';
import Zaps from '../../constants/Baskets';
import '../../App.css';

const ZapListView = () => {
  return (
    <Container>
      <NavigationBar />
      {Object.values(Zaps).map(zap => (
        <ZapFullView
          key={zap.name}
          name={zap.name}
          components={zap.components}
          isOrderable={zap.isOrderable}
          description={zap.description}
          id={zap.id}
        />
      ))}
      <div className="container">
        <div className="row justify-content-center my-4">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <hr />
            <a href="/survey" style={{ color: 'blue', fontSize: 22 }}>
              Not sure which to pick? Try Zap Generator
            </a>
            <br />
            <hr />
            <a
              href="https://github.com/DeFiStrategies/ZapRequests/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue', fontSize: 22 }}
            >
              Don&apos;t see your basket? Submit a request and we will create
              one!
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
};

export default ZapListView;
