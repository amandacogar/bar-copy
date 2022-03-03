import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  window.onscroll = () => {
    scrollNavbar();
  };

  function scrollNavbar() {
    const navbar = document.getElementById("navbar");

    if (document.documentElement.scrollTop > 100) {
      navbar.classList.add("pa-fixed-header");
    } else {
      navbar.classList.remove("pa-fixed-header");
    }
  }

  return (
    <Navbar
      expand="lg"
      bg="none"
      id="navbar"
      variant="white"
      collapseOnSelect={true}
      fixed="top"
      className="nav-transparent"
    >
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand as={Link} to="/" id="logo">
            The Bar
          </Navbar.Brand>
          <Nav.Link
            as={Link}
            to="/get-to-know-us"
            className="nav-link"
            eventKey={1}
          >
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/menu" className="nav-link" eventKey={2}>
            Menu
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className="nav-link" eventKey={3}>
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/visit-us" className="nav-link" eventKey={4}>
            Visit Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
