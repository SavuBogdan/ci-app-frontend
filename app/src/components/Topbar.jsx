import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/css/Topbar.module.css';

const Topbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Topbar;
