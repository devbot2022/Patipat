import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#">
        <img src="https://github.com/panotza/pikkanode/blob/master/pikkanode.png?raw=true" className='pikka-logo' style={{width:'150px'}}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Create</Nav.Link>
        <Nav.Link href="#">Pikka</Nav.Link>
        <Nav.Link href="#">SignIn</Nav.Link>
        <Nav.Link href="#">SignUp</Nav.Link>
        <Nav.Link href="#">SignOut</Nav.Link>
        <Nav.Link href="#">Contact Us</Nav.Link>
        <NavDropdown title="Work&Travel" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Iceland</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Italy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Tokyo</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Learn UK</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
