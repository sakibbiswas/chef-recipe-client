import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='facebook-f' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='twitter' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='github' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Project name
                                </h6>
                                <p className='fw-bold active'>Chef food recipe</p>

                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    sakib@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className='text-reset fw-bold' href='https://www.google.com/search?q=food+recipe.com&oq=food+recipe.com&aqs=chrome..69i57j0i22i30l9.13068j0j7&sourceid=chrome&ie=UTF-8'>
                        food recipe.com
                    </a>
                </div>
            </MDBFooter>

        </Container>
    );
};

export default Footer;