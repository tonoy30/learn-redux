import React, { Component } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary">Log In</Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default HomePage;
