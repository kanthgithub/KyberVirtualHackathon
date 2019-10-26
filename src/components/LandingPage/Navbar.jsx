import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => (
  <div className="pt-3">
    <Navbar
      className="navbar-dark "
      expand="lg"
      style={{ background: "transparent" }}
    >
      <Nav className="mr-auto">
        <Nav.Link href="/how-it-works">How it works</Nav.Link>
        <Nav.Link href="/baskets">Explore Baskets</Nav.Link>
        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default NavigationBar;
