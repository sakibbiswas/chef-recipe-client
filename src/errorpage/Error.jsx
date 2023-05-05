import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import picture from '../../public/assets/istockphoto-1153372686-170667a.jpg'
import useTitle from '../Hooks/Usetitle';
const Error = () => {
    useTitle('Error')
    return (
        <Container className='text-center '>
            <h1 className='fs-1 fw-bolder'> 404 Error Page</h1>
            <p className='fs-3'>This page doesn't exist</p>
            <Card.Img className='mb-4' variant="top" src={picture} />
        </Container>
    );
};

export default Error;
