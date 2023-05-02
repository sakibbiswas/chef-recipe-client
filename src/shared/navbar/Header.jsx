import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import man from '../../../public/assets/man.png'
import Slider from '../../slider/Slider';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-opacity-100 text-secondary fw-bold fs-3'>Food-Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <Image style={{ height: '45px' }} src={man} roundedCircle />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Slider></Slider> */}
        </Container>
    );
};

export default Header;