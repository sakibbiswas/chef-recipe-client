import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const Foodcard = ({ country }) => {
    const { _id, name, img, image_url, author, title, experience, Numbers_of_recipes, likes } = country
    return (
        <div>
            <Row md={1} className="g-1">

                <Col>
                    <Card className=' mb-3'>
                        <LazyLoadImage variant='top' effect="blur"
                            className='w-100' alt={image_url.alt} src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <div className="">
                                    <p className='fw-semibold'>Years of experience{experience} </p>
                                    <p className='fw-semibold'> Numbers of recipes : {Numbers_of_recipes}</p>
                                </div>
                            </Card.Text>
                            <p className='fw-semibold'>Likes : {author.likes}</p>

                            <Link to={`/chef/${_id}`}>
                                <Button variant="primary">View Recipes</Button>
                            </Link>


                        </Card.Body>
                    </Card>
                </Col>


            </Row>

        </div>
    );
};

export default Foodcard;