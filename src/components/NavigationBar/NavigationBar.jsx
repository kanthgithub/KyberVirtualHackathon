import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import kyberlogo from '../../assets/kyber-logo.png';

import styles from './NavigationBar.module.css';

const NavigationBar = () => (
  <div className="mt-1 mb-3">
    <Navbar expand="md">
      <Navbar.Brand href="/">
        DeFi Zap
        <sup>Beta</sup>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text>
            <Button
              className={styles.anchorSpacing}
              variant="link"
              href="/survey"
            >
              Get Started
            </Button>
          </Navbar.Text>
          <Navbar.Text>
            <Button
              className={styles.anchorSpacing}
              variant="link"
              href="/zaps"
            >
              Explore Zaps
            </Button>
          </Navbar.Text>
          <Navbar.Text>
            <Button variant="link" href="/faq" className={styles.anchorSpacing}>
              FAQ
            </Button>
          </Navbar.Text>
          <Navbar.Text>
            <Button
              href="https://devpost.com/software/defi-zap"
              variant="link"
              target="_blank"
              className={styles.anchorSpacing}
            >
              Devpost
            </Button>
          </Navbar.Text>
          <Navbar.Text>
            <Button
              href="https://t.me/defizap"
              variant="link"
              target="_blank"
              className={styles.anchorSpacing}
            >
              Telegram
            </Button>
          </Navbar.Text>
        </Nav>
        <Navbar.Text className={styles.logoPadding}>
          <sup>powered by</sup>
          <img
            src={kyberlogo}
            style={{
              width: '70px'
            }}
            alt="Kyber Logo"
          />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavigationBar;
