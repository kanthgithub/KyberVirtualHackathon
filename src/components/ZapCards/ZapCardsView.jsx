import React from "react";
import isEmpty from "lodash/isEmpty";

import PercentageCircle from "../PercentageCircle";

import "../../App.css";
import BuyButton from "../BuyButton";
import LenderBuyButton from "../BuyButton/LenderBuyButton";
import ETHMAXIMALISTBuyButton from "../BuyButton/ETHMaximalistBuyButton";


const ZapCardsView = props => {
  const {
    basketData: { name, components, isOrderable }
  } = props;

  if (!isEmpty(props.basketData)) {
    return (
      <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10">
              <p className="text-center my-4 lender font30">{name}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
              {components.map(({ name, percent }) => (
                <div key={name}>
                  <PercentageCircle percentage={percent} color="#1314ad" />
                  <h6 className="text-center mt-3">{name}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-12 col-md-12 col-lg-12 text-center ">
              {(name === "ETH Maximalist") ? (<ETHMAXIMALISTBuyButton name={name} isOrderable={isOrderable} />) : (<LenderBuyButton name={name} isOrderable={isOrderable} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ZapCardsView;
