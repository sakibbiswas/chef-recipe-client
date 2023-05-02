import React from 'react';
import Header from '../shared/navbar/Header';
import Footer from '../shared/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../shared/leftnav/Leftnav';
import Rightnav from '../shared/Rightnav/Rightnav';
import Slider from '../slider/Slider';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={6}>

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

export default Main;