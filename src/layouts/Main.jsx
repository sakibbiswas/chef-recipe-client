import React from 'react';
import Header from '../shared/navbar/Header';
import Footer from '../shared/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../shared/leftnav/Leftnav';
import Rightnav from '../shared/Rightnav/Rightnav';

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
                        <h2>main content</h2>
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