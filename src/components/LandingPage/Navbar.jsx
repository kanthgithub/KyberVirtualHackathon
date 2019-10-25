import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => (
  <>
    <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">
              <Nav.Link href="/how-it-works">How it works</Nav.Link>
              <Nav.Link href="/explore-baskets">Explore Baskets</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
      </Navbar>    
  </>
);

export default NavigationBar;
