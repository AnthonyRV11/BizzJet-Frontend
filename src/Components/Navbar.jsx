import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" fixed="top" style={{ fontWeight: 'bold' }}>
        <Navbar.Brand href="#" style={{ color: '#00ABF0', fontSize: '3rem' }}>ㅤBizzJet!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center">
          <Nav>
            <Link to='/' style={{ fontSize: '1.5rem', color: '#F88F1D', textDecoration: 'none' }}>Homeㅤ</Link>
            <Link to='/' style={{ fontSize: '1.5rem', color: '#F88F1D', textDecoration: 'none' }}>About Usㅤ</Link>
            <Link to='/login' style={{ fontSize: '1.5rem', color: '#F88F1D', textDecoration: 'none' }}>Login!ㅤ</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet/>
    </div>
  );
}

export default CustomNavbar;

