import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import kyberlogo from "../../assets/kyber-logo.png";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => (
  <div className="pt-3">
    <Navbar
      className="navbar-dark"
      expand="sm"
      style={{ background: "red" }}
    // fixed="top"  // Not sure if I wanna do this. This needs some revisiting.
    >
      <Nav className="mr-auto">
        <Navbar.Brand href="/">DeFi Zap <sup>Beta</sup></Navbar.Brand>
        <Navbar.Text>
          <a className={styles.anchorSpacing} href="/survey">
            Get Started
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="/zaps" className={styles.anchorSpacing}>
            Explore Zaps
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            className={styles.anchorSpacing}
            href="https://defitutorials.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tutorials
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="/faq" className={styles.anchorSpacing}>
            FAQ
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            href="https://t.me/defizap"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.anchorSpacing}
          >
            Telegram
          </a>
        </Navbar.Text>
        <Navbar.Text style={{ float: "right" }}>
          <sup>powered by</ sup>
          <img src={kyberlogo} style={{ width: "150px", height: "50px" }} alt="Kyber Logo" />
        </Navbar.Text>


      </Nav>
    </Navbar>
  </div >
);

export default NavigationBar;
