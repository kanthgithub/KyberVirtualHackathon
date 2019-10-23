import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Accordion = ({ title, description, parent, index }) => (
  <div class="card shadow">
    <div
      class="card-header"
      id={`heading${index}`}
      style={{ backgroundColor: "white" }}
    >
      <h6
        class="my-3 ml-3"
        data-toggle="collapse"
        data-target={`#collapse${index}`}
        aria-expanded="true"
        aria-controls={`collapse${index}`}
      >
        {title}
      </h6>
    </div>

    <div
      id={`collapse${index}`}
      class="collapse"
      aria-labelledby={`heading${index}`}
      data-parent={`#${parent}`}
    >
      <div class="card-body">
        <p className="text-center">{description}</p>
        <div className="row justify-content-center my-4">
          <Link
            to="/baskets"
            className="btn btn-dark shadow rounded-pill px-4 py-2"
          >
            Show me the basket
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Accordion;
