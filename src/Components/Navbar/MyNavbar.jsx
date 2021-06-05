import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="My Portfolio Logo" src="https://img.icons8.com/dusk/50/000000/huawei-logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <Nav.Link href="#pricing">Experience</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;