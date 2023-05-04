import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../providers/Authprovider';
import ActiveLink from '../../activeLink/ActiveLink';

const Navigation = () => {
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
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand href="#home" className='text-opacity-100 text-secondary fw-bold fs-3'>Food-Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav"
                    >
                        <Nav className="mx-auto">
                            <Nav.Link className=' fw-semibold d-flex text-secondary text-decoration-none align-items-center ms-4' >
                                <ActiveLink className='fw-semibold d-flex text-secondary text-decoration-none align-items-center ms-4' to="/country/0">Home</ActiveLink>
                            </Nav.Link>


                            <Nav.Link className=' fw-semibold d-flex text-secondary text-decoration-none align-items-center ms-4' >
                                <ActiveLink className='fw-semibold d-flex text-secondary text-decoration-none align-items-center ms-4' to="/qustion">Blog</ActiveLink>
                            </Nav.Link>

                            <Nav.Link className=' fw-semibold d-flex text-secondary text-decoration-none align-items-center ms-4' >
                                <ActiveLink to="/error">Error</ActiveLink>
                            </Nav.Link>
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

        </Container>
    );
};

export default Navigation;