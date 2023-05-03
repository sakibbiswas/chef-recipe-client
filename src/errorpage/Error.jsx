import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import picture from '../../public/assets/istockphoto-1153372686-170667a.jpg'
const Error = () => {
    return (
        <Container className='text-center '>
            <h1 className='fs-1 fw-bolder'> 404 Error Page</h1>
            <p className='fs-3'>This page doesn't exist</p>
            <Card.Img className='mb-4' variant="top" src={picture} />
            <Link to='/country/0'>
                <Button variant="warning">Go back Home</Button>
            </Link>
        </Container>
    );
};

export default Error;
