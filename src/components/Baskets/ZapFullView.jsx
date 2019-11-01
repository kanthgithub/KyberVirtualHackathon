import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import autobind from 'react-autobind';
import PercentageCircle from "../PercentageCircle";

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
    };
    autobind(this);
  }


  render() {
    let name = this.state.name;
    let components = this.state.components;
    let isOrderable = this.state.isOrderable;
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
                    <h4 className="text-center my-3" style={{ color: "black" }}>
                      Auto allocate your deposit to
                    </h4>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
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
                <div className="row justify-content-center my-4">
                  <div className="col-12 col-md-12 col-lg-12 text-center ">
                    {(name === "ETH Maximalist") ? (<ETHMAXIMALISTBuyButton name={name} isOrderable={isOrderable} />) : (<LenderBuyButton name={name} isOrderable={isOrderable} />)}
                  </div>
                  <div className="my-4">
                    {
                      isOrderable ? (
                        <Button
                          href='https://www.youtube.com/watch?v=6kgaF3G8EVw'
                          variant="outline-info"
                          target="_blank"
                          size='lg'
                        >
                          View Tutorial
                      </Button>) : null}
                  </div>
                </div>
                <div className="row justify-content-center my-4">
                  <div className="col-12 col-md-12 col-lg-12 text-center">
                    {this.state.isOrderable ? null : (
                      <>
                        <h4 style={{ color: 'black' }}>
                          This Zap is still under development.</h4>
                        <h4 style={{ color: 'black' }}> In the meantime, check out our <a href="/zaps/lender"> Lender</a> Zap or <a href="zaps/ETHMaximalist"> ETH Maximalist</a> Zap.
                        </h4>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


// const ZapFullView = ({ ...props }) => {
//   const { name, components, isOrderable } = props;


// };

export default ZapFullView;
