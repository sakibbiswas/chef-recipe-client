import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import pic1 from "../../../../public/assets/Haleem-960x960.jpg.webp"
import pic2 from "../../../../public/assets/Seekh-Kebab-960x960.jpg.webp"
import pic3 from "../../../../public/assets/Falooda-1-960x960.jpg.webp"


const Details = () => {
    const chefdata = useLoaderData();
    console.log(chefdata);
    const { title, details, Biodata, rating, author, _id, image_url, thumbnail_url, experience } = chefdata;
    return (
        <Container>

            <Card className='mb-4' >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {Biodata}
                    </Card.Text>
                    <p>Experience : {experience}</p>
                </Card.Body>
            </Card>

            <div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant='top' src={pic1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={pic2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={pic3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </div>
        </Container>
    );
};

export default Details;