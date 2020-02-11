import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {BrowserRouter, NavLink} from 'react-router-dom'



const NavBar = () => {
    return (
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Tyler Maxwell
                    </Navbar.Brand>
                <Nav.Link href="/#">Read The Article</Nav.Link>
                <Nav.Link>
                    <NavLink to="/about">About Tyler</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/other-stuff">Other Stuff</NavLink>
                </Nav.Link>
            </Navbar>
        </BrowserRouter>


    )
}

export default NavBar;