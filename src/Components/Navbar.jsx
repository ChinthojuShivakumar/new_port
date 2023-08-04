
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import './Navbar.css'


function Navvbar() {
  return (
    <div>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary Navvbbar" style={{position:'fixed',width:'100rem'}}>
              <Container>
                  <Navbar.Brand href="#home">Shivakumar's Portfolio</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#features">Home</Nav.Link>
                          <Nav.Link href="#features">About Me</Nav.Link>
                          <Nav.Link href="#pricing">Skills</Nav.Link>
                          <Nav.Link href="#deets">Projects</Nav.Link>
                          <Nav.Link href="#deets">Contact</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </div>
  )
}

export default Navvbar