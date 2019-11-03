import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../App.css';
import heroimg from '../../assets/hero.svg';

const Hero = () => (
  <div className="container-flex">
    <div className="row">
      <div
        className="col-6 "
        style={{ backgroundColor: '#FF0000', alignSelf: 'center' }}
      >
        <p className="h1">DeFiZap
          <sup>Beta</sup>
        </p>
        <p className="lead">
          Get instant exposure across multiple DeFi protocols based on your
          investment goals.
        </p>
        <Button
          variant="light"
          href="/survey"
          className="shadow lift mr-1 my-2 py-3 font20 px-4"
        >
          Get Started
        </Button>
      </div>
      <div className="col-6" style={{ backgroundColor: '#add8e6' }}>
        <img
          src={heroimg}
          style={{ width: '100%', height: 'auto' }}
          alt="Welcome to DeFiZap"
        />
      </div>
    </div>
  </div>

  // <table>
  //   <tr>
  //     <td sm="auto" md="auto" lg="auto">
  //       {/* <td sm="auto" md="auto" lg="auto" style={{ backgroundColor: "#FF0000" }}> */}
  //       <Row className="pt-5">
  //         <h1>DeFiZap</h1>
  //         <h5>
  //           <sup>Beta</sup>
  //         </h5>
  //       </Row>
  //       <Row className="pt-3">
  //         <h4 className="lead">
  //           Get instant exposure across multiple DeFi protocols based on your
  //           investment goals.
  //         </h4>
  //       </Row>
  //       <Row>
  // <Button
  //   variant="light"
  //   href="/survey"
  //   className="shadow lift mr-1 my-2 py-3 font20 px-4"
  // >
  //   Get Started
  // </Button>
  //       </Row>
  //     </td>
  //     <td sm="auto" md="auto" lg="auto" >
  //       {/* <td sm="auto" md="auto" lg="auto" style={{ backgroundColor: "#0000FF" }} > */}
  //       <img src={heroimg} style={{ width: "100%", height: "auto" }} alt="Welcome to DeFiZap" />
  //     </td>
  //   </tr>
  // </table >
);

export default Hero;
