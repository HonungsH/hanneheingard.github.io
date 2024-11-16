import React from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Experience</Nav.Link>
                    <Nav.Link href="#features">Competences</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;