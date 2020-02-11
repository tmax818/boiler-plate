import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tyler from './tyler.jpeg'
import { SocialIcon } from 'react-social-icons';

import {BrowserRouter, NavLink} from 'react-router-dom'


const Footer = () => {
    return (
        <BrowserRouter>
            <Navbar bg="gray" variant="dark" fixed="sticky" >
                <Container>
                    <Row>
                        <Col xs={9} md={9}>
                            <Image src={tyler} fluid />
                        </Col>
                    </Row>
                </Container>
                <Nav.Link href="https://medium.com/@tylermaxwell"><SocialIcon url="https://medium.com/@tylermaxwell" /></Nav.Link>
                <Nav.Link href="https://twitter.com/tmax818"><SocialIcon url="https://twitter.com/tmax818" /></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/tylermaxwell/"><SocialIcon url="https://www.linkedin.com/in/tylermaxwell/" /></Nav.Link>
                <Nav.Link href="https://github.com/tmax818"><SocialIcon url="https://github.com/tmax818" /></Nav.Link>
    
            </Navbar>
        </BrowserRouter>


    )
}

export default Footer;