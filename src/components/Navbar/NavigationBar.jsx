import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import kyberlogo from "../../assets/kyber-logo.png";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => (
  <div className="pt-1 pb-2">
    <Navbar expand="md">
      <Navbar.Brand href="/">DeFi Zap <sup>Beta</sup></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
        </Nav>
        <Navbar.Text className={styles.logoPadding}>
            <sup>powered by</sup>
            <img src={kyberlogo} style={{ 
                width: "70px"
              }}
              alt="Kyber Logo" />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </div >
);

export default NavigationBar;
