import React from "react";

import PercentageCircle from "../PercentageCircle";
import BuyButton from "../BuyButton";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';

import styles from "./Baskets.module.css";
import "../../App.css";

const ZapFullView = ({ ...props }) => {
  const { name, components, isOrderable } = props;
  let viewModal = false;
  
  const loadTutorial = () => {
    viewModal = !viewModal;
  };

  const hideModal = () => {
    viewModal = false;
  };
  // TODO: Working on the modal for the video.
  return (
    <div className={styles.cardContainer}>
      <Modal show={viewModal} onHide={hideModal}>
        <iframe
          title="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6kgaF3G8EVw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
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
                  {
                    isOrderable? (
                      <Button onClick={loadTutorial} variant="outline-info">
                        View Tutorial
                      </Button>) : null
                  }
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
