import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import '../assets/css/Sidebar.module.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Button className="toggle-button" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </Button>
            <Nav className="flex-column">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
