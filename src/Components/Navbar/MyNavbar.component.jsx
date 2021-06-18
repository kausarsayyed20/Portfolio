import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <>
            <Navbar className="Navcontainer" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="My Portfolio Logo" src="https://img.icons8.com/dusk/50/000000/huawei-logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Experience">Experience</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;