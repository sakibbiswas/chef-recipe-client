import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import pic1 from "../../../../public/assets/Haleem-960x960.jpg.webp"
import pic2 from "../../../../public/assets/Seekh-Kebab-960x960.jpg.webp"
import pic3 from "../../../../public/assets/Falooda-1-960x960.jpg.webp"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Details = () => {
    const chefdata = useLoaderData();
    console.log(chefdata);
    const { title, details, Biodata, name, rating, author, _id, image_url, thumbnail_url, experience, likes, number } = chefdata;
    return (
        <Container>

            <Card className='mb-4' >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {Biodata}
                    </Card.Text>
                    <p className='fw-semibold'>Experience : {experience}</p>
                    <p className='fw-semibold'>Likes: {author.likes}</p>
                </Card.Body>
            </Card>

            <div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant='top' src={pic1} />
                            <Card.Body>
                                <Card.Title> Haleem</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className="flex-grow-1 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <Button variant="primary">Favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={pic2} />
                            <Card.Body>
                                <Card.Title>Seekh Kebab</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className="flex-grow-1 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <Button variant="primary">Favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={pic3} />
                            <Card.Body>
                                <Card.Title> Falooda </Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <div className="flex-grow-1 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <Button variant="primary">Favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </div>
        </Container>
    );
};

export default Details;