import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  return (
    <Navbar bg="transparent" expand="lg" fixed="top" style={{ fontWeight: 'bold' }}>
      <Navbar.Brand href="#" style={{ color: '#00ABF0', fontSize: '3rem' }}>ㅤBizzJet!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center">
        <Nav>
          <Nav.Link href="#" style={{ fontSize: '1.5rem', color: '#F88F1D' }}>Home</Nav.Link>
          <Nav.Link href="#" style={{ fontSize: '1.5rem', color: '#F88F1D' }}>About Us</Nav.Link>
          <Nav.Link href="#" style={{ fontSize: '1.5rem', color: '#F88F1D' }}>Login!ㅤ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;

