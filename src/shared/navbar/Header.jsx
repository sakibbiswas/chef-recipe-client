import React, { useContext, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import Slider from '../../slider/Slider';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../providers/Authprovider';


const Header = () => {

    const { user, logOut } = useContext(Authcontext)
    const handellogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-opacity-100 text-secondary fw-bold fs-3'>Food-Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link className='d-flex text-black text-decoration-none align-items-center' to="/country/0">Home</Link>
                            <Link className='d-flex text-black text-decoration-none align-items-center' to="/error">Blog</Link>

                            <Link className='d-flex text-black text-decoration-none align-items-center' to="/error">Error</Link>

                        </Nav>
                        <Nav className='gap-3'>
                            {user &&
                                <Image title={user.displayName} style={{ height: '45px' }} src={user.photoURL} roundedCircle />


                            }



                            {
                                user ?
                                    <Button onClick={handellogOut} variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Slider></Slider> */}
        </Container>
    );
};

export default Header;