import React from "react";

import PercentageCircle from "../PercentageCircle";
import BuyButton from "../BuyButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import styles from "./Baskets.module.css";
import "../../App.css";

const ZapFullView = ({ ...props }) => {
  const { name, components, isOrderable } = props;

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
                  <BuyButton name={name} isOrderable={isOrderable} />
                </div>
                <div className="my-4">
                  <OverlayTrigger
                    placement="right"
                    key="right"
                    overlay={<Tooltip>Coming soon</Tooltip>}
                  >
                    <button className="btn btn-outline-primary shadow px-4 py-2">
                      View Analytics
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-12 col-lg-12 text-center">
                  {isOrderable ? null : (
                    <>
                      <h4 style={{ color: 'black'}}>
                      This Zap is still under development. In the meantime,
                      check out our <a href="/zaps/lender"> Lender</a> Zap.
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
};

export default ZapFullView;
