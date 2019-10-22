import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";

const Survey = () => {
  const surveyData = [
    {
      title: "How soon can I retire?",
      description:
        "Tell us how you want to retire. We’ll calculate the earliest age, factoring in taxes, inflation, social security, and even what sort of house you’ll live in."
    },
    {
      title: "What sort of home can I afford?",
      description:
        "Decide where and when to buy. We’ll forecast future prices, taxes, and insurance to see what you can afford and measure the impact on your finances."
    },
    {
      title: "Can I cover my child's college?",
      description:
        "Imagine their dream school. We’ll calculate your financial aid eligibility and how much of the projected future costs you can afford to cover."
    },
    {
      title: "Can I take time off to travel?",
      description:
        "Determine your budget for months or years away. We’ll measure the impact to your retirement and overall finances, including disruption to income growth."
    },
    {
      title: "I’m not sure where to start",
      description:
        "You’re not the only one. Start with retirement to benchmark your financial health. It’s easier to enjoy life and make decisions when your future is secure."
    }
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand">
            <h2>DeFi Strategies</h2>
          </a>
          <Link to="/dashboard" className="btn btn-primary shadow ml-auto">
            Get Started
          </Link>
        </div>
      </nav>
      <section className="pt-5 pb-5 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10 col-lg-10">
              <div className="card ">
                <div className="card-body">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col col-md-6 col-lg-6">
                        <h2 className="my-4 text-center text-primary">
                          Welcome to the Survey
                        </h2>
                        <p className="mb-5 text-center">
                          Pick your investment goal and we will recommend you
                          the best basket to invest in as per your risk
                          appetite.
                        </p>
                        <div class="accordion" id="survey-accordion">
                          {surveyData.map(({ title, description }, index) => (
                            <Accordion
                              key={index}
                              title={title}
                              description={description}
                              parent="survey-accordion"
                              index={index}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Survey;
