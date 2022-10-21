import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


function Home() {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mash-Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/loginuser">Login User</NavDropdown.Item>
              
              <NavDropdown.Item href="/loginadmin">Login Admin</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
            <Nav className="me-auto">
           
            <NavDropdown title="SignUp" id="basic-nav-dropdown">
              <NavDropdown.Item href="/signupuser">Sign Up</NavDropdown.Item>
              
              <NavDropdown.Item href="/signup">SignUp Admin</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;