import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ethereum from '../../assets/FooterIcons/ethereum.svg';
import synthetix from '../../assets/FooterIcons/synthetix.svg';
import bzx from '../../assets/FooterIcons/bzx.svg';
import compound from '../../assets/FooterIcons/compound.svg';
import kyber from '../../assets/FooterIcons/kyber.svg';
import tokensets from '../../assets/FooterIcons/tokensets.svg';

const FooterView = () => (
  <Row className="pt-1 mt-1 text-center justify-content-center bg-light">
    {/** Can't seem to align this powered by text, needs work. */}
    {/* <Row className="text-muted justify-content-center text-center"> */}
    {/* Powered By */}
    {/* </Row> */}
    <Row>
      <Col sm md lg className="p-1 m-1">
        <img src={ethereum} className="img-fluid" width="250px" alt="ethereum" />
      </Col>
      <Col sm md lg className="p-1 m-1">
        <img src={compound} className="img-fluid" width="150px" alt="compound" />
      </Col>
      {/** TOKENSETS currently has a white background, so it's UGLY. Can't put this in right now.
        Try on local, the footer currently has a bg-light background so it's not that bad.
        */}
      <Col sm md lg className="p-1 m-1">
        <img src={tokensets} className="img-fluid" width="150px" alt="tokensets" />
      </Col>
      <Col sm md lg className="p-1 m-1">
        <img src={bzx} className="img-fluid" width="150px" alt="bzx" />
      </Col>
      <Col sm md lg className="p-1 m-1">
        <img src={kyber} className="img-fluid" width="150px" alt="kyber" />
      </Col>
      <Col sm md lg className="p-1 m-1">
        <img src={synthetix} className="img-fluid" width="150px" alt="synthetix" />
      </Col>
    </Row>
  </Row>
);

export default FooterView;
