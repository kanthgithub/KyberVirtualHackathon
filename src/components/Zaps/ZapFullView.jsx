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
import ModerateBullBuyButton from '../BuyButton/ModerateBullBuyButton';
import styles from './Zaps.module.css';
import '../../App.css';
import DoubleBullBuyButton from '../BuyButton/DoubleBullBuyButton';

class ZapFullView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  customToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);
    return (
      <Button
        className="m-2"
        onClick={decoratedOnClick}
        variant="link"
        size="lg"
      >
        {children}
      </Button>
    );
  };

  render() {
    const { name, components, isOrderable, description } = this.props;

    return (
      <div key={name} className={styles.cardContainer}>
        <section className="pb-2 pt-md-12">
          <div className="container">
            <div className="card shadow" style={{ backgroundColor: '#ffffff' }}>
              <div className="card-body">
                <Row className="flex-column">
                  <Row sm md lg className="justify-content-center">
                    <h1 className="text-center my-3 hedger">{name}</h1>
                  </Row>
                  <Row sm md lg className="justify-content-center">
                    {components.map(item => (
                      <div key={item.name}>
                        <PercentageCircle
                          percentage={item.percent}
                          color="#5540bf"
                        />
                        <h6 className="text-center mt-3">{item.name}</h6>
                      </div>
                    ))}
                  </Row>
                </Row>
                {isOrderable ? (
                  <Accordion>
                    <Row className={styles.buttonSpacing}>
                      <Button
                        href={description.tutorialLink}
                        variant="outline-primary"
                        target="_blank"
                        size="lg"
                        className="m-2"
                      >
                        View Tutorial
                      </Button>
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {name === 'ETH Maximalist' ? (
                        <ETHMAXIMALISTBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      ) : name === 'Moderate Bull' ? (
                        <ModerateBullBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      ) : name === 'Double Bull' ? (
                        <DoubleBullBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      ) : (
                        <LenderBuyButton
                          name={name}
                          isOrderable={isOrderable}
                        />
                      )}
                      <this.customToggle eventKey="0">
                        More info
                      </this.customToggle>
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
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {name === 'ETH Maximalist' ? (
                      <ETHMAXIMALISTBuyButton
                        name={name}
                        isOrderable={isOrderable}
                      />
                    ) : name === 'Moderate Bull' ? (
                      <ModerateBullBuyButton
                        name={name}
                        isOrderable={isOrderable}
                      />
                    ) : name === 'Double Bull' ? (
                      <DoubleBullBuyButton
                        name={name}
                        isOrderable={isOrderable}
                      />
                    ) : (
                      <LenderBuyButton name={name} isOrderable={isOrderable} />
                    )}
                    <div className="col-12 col-md-12 col-lg-12 text-center">
                      <h4 style={{ color: 'black' }}>
                        This Zap is still under development.
                      </h4>
                      <h4 style={{ color: 'black' }}>
                        {' '}
                        In the meantime, check out{' '}
                        <a href="/zaps/lender"> Lender</a>,{' '}
                        <a href="/zaps/moderatebull"> Moderate Bull</a>,{' '}
                        <a href="/zaps/doublebull"> Double Bull</a> or
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
