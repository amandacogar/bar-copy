import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="black" variant="dark">
      <Nav className="me-auto" id="footer">
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.yelp.com/">
          <i className="fab fa-yelp"></i>
        </a>
      </Nav>
    </Navbar>
  );
}

export default Footer;
