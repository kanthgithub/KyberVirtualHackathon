import React from "react";
import isEmpty from 'lodash/isEmpty';

import PercentageCircle from "../PercentageCircle";
import BuyButton from "../BuyButton";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import styles from './Baskets.module.css';

const BasketsView = ({ ...props }) => {
    const { basketData } = props;

    if(!isEmpty(basketData)) {
        return (
          <div className={styles.cardContainer}>
          <section className="pb-5 pt-md-12">
          <div className="container">
            <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8">
                    <h1 className="text-center my-4 hedger">{basketData.name}</h1>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                    {basketData.components.map(item => (
                        <div>
                          <PercentageCircle percentage={item.percent} color="#5540bf" />
                          <h6 className="text-center mt-3">{item.name}</h6>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="row justify-content-center my-4">
                  <div className="col-12 col-md-12 col-lg-12 text-center ">
                    <BuyButton name={basketData.name} isOrderable={basketData.isOrderable} />
                  </div>
                  <div className="my-4">
                    <OverlayTrigger
                      placement="right"
                      key="right"
                      overlay={
                        <Tooltip>
                          Coming soon
                        </Tooltip>
                      }
                    >
                      <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                        View Analytics
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      );
    }
    return null;
};

export default BasketsView;