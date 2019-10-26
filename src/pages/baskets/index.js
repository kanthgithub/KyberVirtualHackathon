/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import PercentageCircle from "../../components/PercentageCircle";
import BuyButton from "../../components/BuyButton";

const Baskets = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand">
            <h2>DeFi Strategies</h2>
          </a>
        </div>
      </nav>
      <section className="pt-5 pb-5 pt-md-12">
        <div className="container">
          <h1 className="display-3 text-center">Baskets</h1>
          <p className="text-center text-muted col-12">
            Allocate your money across{" "}
            <span className="text-dark">
              Compound + TokenSets + Fulcrum + Synthetix + dYdX
            </span>{" "}
            <br />
            in one single transaction.
          </p>
        </div>
      </section>

      {/* Hedger Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 hedger">Hedger</h1>
                  <p className="my-4 text-center text-muted">
                    Invest 10% in cDAI, 20% in ETHHIVOL, 20% in ETH12EMA, 20% in
                    ETH26EMA, 5% in LONG2xBZX and 5% in SHORTdYdX.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={10} color="#5540bf" />
                    <h6 className="text-center mt-3">cDAI</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={20} color="#5540bf" />
                    <h6 className="text-center mt-3">ETHHIVOL</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={20} color="#5540bf" />
                    <h6 className="text-center mt-3">ETH20SMACO</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={20} color="#5540bf" />
                    <h6 className="text-center mt-3">ETH12EMA</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={20} color="#5540bf" />
                    <h6 className="text-center mt-3">ETH26EMA</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={"05"} color="#5540bf" />
                    <h6 className="text-center mt-3">LONG2xBZX</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={"05"} color="#5540bf" />
                    <h6 className="text-center mt-3">SHORTdYdX</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-12 col-lg-12 text-center ">
                  <BuyButton name="Hedger" />
                </div>
                <div className="my-4">
                  <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short-term Bear Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 shortTermBear">
                    Short-term Bear
                  </h1>
                  <p className="my-4 text-center text-muted">
                    Invest 50% in cDAI, 30% in ETHMINVOL and 20% in SHORTdYdX.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={50} color="#f03b68" />
                    <h6 className="text-center mt-3">cDAI</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={30} color="#f03b68" />
                    <h6 className="text-center mt-3">ETHMINVOL</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={20} color="#f03b68" />
                    <h6 className="text-center mt-3">SHORTdYdX</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-12 text-center ">
                  <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                    Buy Basket
                  </button>
                </div>
                <div className="my-4">
                  <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short-term Swings Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 shortTermSwings">
                    Short-term Swings{" "}
                  </h1>
                  <p className="my-4 text-center text-muted">
                    Invest 30% in cDAI, 35% in ETHHIVOL, 35% in ETHMINVOL.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={30} color="#262626" />
                    <h6 className="text-center mt-3">cDAI</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={35} color="#262626" />
                    <h6 className="text-center mt-3">ETHHIVOL</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={35} color="#262626" />
                    <h6 className="text-center mt-3">ETHMINVOL</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-12 col-lg-12 text-center ">
                  <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                    Buy Basket
                  </button>
                </div>
                <div className="my-4">
                  <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short-term Bull Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 shortTermBull">
                    Short-term Bull
                  </h1>
                  <p className="my-4 text-center text-muted">
                    Invest 70% in ETHMINVOL and 30% in LONG2xBZX.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={70} color="#f49124" />
                    <h6 className="text-center mt-3">ETHMINVOL</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={30} color="#f49124" />
                    <h6 className="text-center mt-3">LONG2xBZX</h6>
                  </div>
                </div>
                <div className="row justify-content-center my-4">
                  <div className="col-12 col-md-12 col-lg-12 text-center ">
                    <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                      Coming Soon
                    </button>
                  </div>
                  <div className="my-4">
                    <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                      View Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Bull Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 longTermBull">
                    Long-term Bull{" "}
                  </h1>
                  <p className="my-4 text-center text-muted">
                    Invest 70% in ETHHIVOL and 30% in LONG2xBZX.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={70} color="#4bc0c0" />
                    <h6 className="text-center mt-3">ETHHIVOL</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={30} color="#4bc0c0" />
                    <h6 className="text-center mt-3">LONG2xBZX</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-12 col-lg-12 text-center ">
                  <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                    Buy Basket
                  </button>
                </div>
                <div className="my-4">
                  <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Basket */}
      <section className="pb-5 pt-md-12">
        <div className="container">
          <div className="card shadow" style={{ backgroundColor: "#ffffff" }}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="text-center my-4 lender">Lender</h1>
                  <p className="my-4 text-center text-muted">
                    Invest 85% in cDAI and 15% in ETHHIVOL.
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-12 justify-content-center d-flex my-4">
                  <div>
                    <PercentageCircle percentage={85} color="#1314ad" />
                    <h6 className="text-center mt-3">cDAI</h6>
                  </div>
                  <div>
                    <PercentageCircle percentage={15} color="#1314ad" />
                    <h6 className="text-center mt-3">ETHHIVOL</h6>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-12 col-lg-12 text-center ">
                  <button className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 ">
                    Buy Basket
                  </button>
                </div>
                <div className="my-4">
                  <button className="btn btn-outline-primary shadow rounded-pill px-4 py-2">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Baskets;
