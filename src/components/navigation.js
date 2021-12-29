import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      fixed="top"
      id="navbar"
      variant="dark"
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/get-to-know-us"
              className="nav-link"
              eventKey={1}
            >
              Get To Know Us
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link" eventKey={2}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link" eventKey={3}>
              Events
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/visit-us"
              className="nav-link"
              eventKey={4}
            >
              Visit Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
