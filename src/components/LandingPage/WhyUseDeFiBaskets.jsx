import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WhyUseDeFiBaskets = () => (
<Container>
    <Row className="justify-content-md-center"><h5>WHY USE DEFI BASKETS?</h5></Row>
    <Row>
        <Col>
            <h4>Save Time</h4>
            <h6>
                Baskets spread your capital across various DeFi protocols in one transaction, bypassing many manual steps.
            </h6>
        </Col>

        <Col>
            <h4>Save gas</h4>
            <h6>
                By bundling smart contract integration and utilizing <a href='https://gastoken.io' rel='noopener noreferrer' target='_blank'>gastokens.io</a> we help and reduce users reduce transation fees.
            </h6>
        </Col>
        <Col>
            <h4>Non-custodial</h4>
            <h6>
                Our smart contracts instantly return allocated DeFi tokens and you always maintain full-control of your assets.
                <br />
                <a href="https://google.com" rel='noopener noreferrer' target='_blank'>View our smart contract code here.</a>
            </h6>
        </Col>
    </Row>
</Container>
);

export default WhyUseDeFiBaskets;
