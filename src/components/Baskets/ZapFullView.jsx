import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import autobind from 'react-autobind';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';

import PercentageCircle from '../PercentageCircle';
import LenderBuyButton from '../BuyButton/LenderBuyButton';
import ETHMAXIMALISTBuyButton from '../BuyButton/ETHMaximalistBuyButton';
import styles from './Baskets.module.css';
import '../../App.css';

class ZapFullView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  customToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);
    return (
      <Button onClick={decoratedOnClick} variant="outline-primary" size="lg">
        {children}
      </Button>
    );
  };

  render() {
    const { name, components, isOrderable, description } = this.props;

    return (
      <div key={name} className={styles.cardContainer}>
        <section className="pb-3 pt-md-12">
          <div className="container">
            <div className="card shadow" style={{ backgroundColor: '#ffffff' }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <h1
                      className="text-center my-3 hedger"
                      style={{ color: 'black' }}
                    >
                      {name}
                    </h1>
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-12 d-flex my-4"
                    style={{ justifyContent: 'space-evenly' }}
                  >
                    {components.map(item => (
                      <div key={item.name}>
                        <PercentageCircle
                          percentage={item.percent}
                          color="#5540bf"
                        />
                        <h6
                          className="text-center mt-3"
                          style={{ color: 'black' }}
                        >
                          {item.name}
                        </h6>
                      </div>
                    ))}
                  </div>
                </div>
                {isOrderable ? (
                  <Accordion>
                    <Row className={styles.buttonSpacing}>
                      <this.customToggle eventKey="0">
                        More info
                      </this.customToggle>
                      {name === 'ETH Maximalist' ? (
                        <ETHMAXIMALISTBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      ) : (
                        <LenderBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      )}
                      <Button
                        href={description.tutorialLink}
                        variant="outline-info"
                        target="_blank"
                        size="lg"
                      >
                        View Tutorial
                      </Button>
                    </Row>
                    <Row>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <h3>{description.textQuestion}</h3>
                          {description.textAnswer.map(answer => {
                            return <p key={answer}>{answer}</p>;
                          })}
                          {description.textLink.map((linkData, i) => {
                            return (
                              <div key={linkData.hyperlink}>
                                <a
                                  href={linkData.hyperlink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {linkData.text}
                                </a>{' '}
                                {i === description.textLink.length - 1
                                  ? ''
                                  : 'and'}{' '}
                              </div>
                            );
                          })}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Row>
                  </Accordion>
                ) : (
                  <div className="row justify-content-center my-4">
                    <div className="col-12 col-md-12 col-lg-12 text-center">
                      <h4 style={{ color: 'black' }}>
                        This Zap is still under development.
                      </h4>
                      <h4 style={{ color: 'black' }}>
                        {' '}
                        In the meantime, check out{' '}
                        <a href="/zaps/lender"> Lender</a> Zap or{' '}
                        <a href="zaps/ETHMaximalist"> ETH Maximalist</a>.
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ZapFullView;
