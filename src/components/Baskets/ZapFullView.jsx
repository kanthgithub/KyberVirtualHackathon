import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import autobind from 'react-autobind';
import PercentageCircle from "../PercentageCircle";
import isEmpty from 'lodash/isEmpty';

import LenderBuyButton from "../BuyButton/LenderBuyButton";
import ETHMAXIMALISTBuyButton from "../BuyButton/ETHMaximalistBuyButton";
import styles from "./Baskets.module.css";
import "../../App.css";

class ZapFullView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      components: this.props.components,
      isOrderable: this.props.isOrderable,
      isETHMaximalist: false,
      description: isEmpty(this.props.description) ? {
        'textQuestion': '',
        'textAnswer': [''],
        'textLink': [{
          'text': '',
          'hyperLink': ''
        }],
        'tutorialLink': ''
      }: this.props.description,
      toggleInfo: false,
    };
    autobind(this);
  }

  render() {
    let name = this.state.name;
    let components = this.state.components;
    let isOrderable = this.state.isOrderable;
    const description = this.state.description;
    return (
      <div className={styles.cardContainer}>
        <section className="pb-5 pt-md-12">
          <div className="container">
            <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <h1
                      className="text-center my-3 hedger"
                      style={{ color: "black" }}
                    >
                      {name}
                    </h1>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 d-flex my-4" style={{ justifyContent: 'space-evenly'}}>
                    {components.map(item => (
                      <div key={item.name}>
                        <PercentageCircle
                          percentage={item.percent}
                          color="#5540bf"
                        />
                        <h6
                          className="text-center mt-3"
                          style={{ color: "black" }}
                        >
                          {item.name}
                        </h6>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row my-4" style={{ justifyContent : 'space-evenly'}}>
                    {
                      isOrderable ? (
                        <>
                        <Button
                          data-toggle="collapse" data-target={`#${this.props.id}`}
                          variant="outline-primary"
                          size='lg'
                        >
                          More info
                        </Button>
                        <br />
                        </>
                      ) : null
                    }
                    {(name === "ETH Maximalist") ? (<ETHMAXIMALISTBuyButton name={name} isOrderable={isOrderable} />) : (<LenderBuyButton name={name} isOrderable={isOrderable} />)}
                    {
                      isOrderable ? (
                        <>
                        <br />
                        <Button
                          href={description.tutorialLink}
                          variant="outline-info"
                          target="_blank"
                          size='lg'
                        >
                          View Tutorial
                      </Button>
                      </>) : null}
                </div>
                <>
                      {isOrderable ? (
                        <div className="collapse" id={`${this.props.id}`}>
                          <Card.Body>
                            {
                              <>
                                <h3>{description.textQuestion}</h3>
                                {description.textAnswer.map(answer => {
                                  return (
                                    <p key={answer}>{answer}</p>
                                  );
                                })}
                                {
                                description.textLink.map((linkData, i) => {
                                  return (
                                      <>
                                      <a href={linkData.hyperlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {linkData.text}
                                      </a>
                                      {' '} {i === (description.textLink.length -1) ? '' : 'and'} {' '}
                                      </>
                                  )
                                })
                                }
                              </>
                            }
                          </Card.Body>
                        </div>
                      ): (<div className="row justify-content-center my-4">
                      <div className="col-12 col-md-12 col-lg-12 text-center">
                            <h4 style={{ color: 'black' }}>
                              This Zap is still under development.</h4>
                            <h4 style={{ color: 'black' }}> In the meantime, check out <a href="/zaps/lender">Lender</a> or <a href="zaps/ETHMaximalist">ETH Maximalist</a>.
                            </h4>
                      </div>
                    </div>) }
                </>
                    {this.state.isOrderable ? null : null
                    }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ZapFullView;
