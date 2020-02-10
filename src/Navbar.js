import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="https://www.tylermaxwell.co" target="_blank">
        Tyler Maxwell</Navbar.Brand>
        <Nav.Link href="#link">Read The Article</Nav.Link>
        </Navbar>

    )
}

export default NavBar;