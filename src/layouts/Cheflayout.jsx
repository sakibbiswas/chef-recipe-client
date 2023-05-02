import React from 'react';
import Header from '../shared/navbar/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Rightnav from '../shared/Rightnav/Rightnav';
import Footer from '../shared/footer/Footer';

const Cheflayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-3'>

                <Row>

                    <Col lg={9}>
                        <Outlet></Outlet>

                    </Col>
                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Cheflayout;
