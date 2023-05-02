import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Foodcard = ({ country }) => {
    const { name, img, image_url, title } = country
    return (
        <div>
            <Row md={1} className="g-1">

                <Col>
                    <Card className=' mb-3'>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <div className='d-flex gap-4'>
                                <Button variant="primary">View Recipes</Button>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>

        </div>
    );
};

export default Foodcard;