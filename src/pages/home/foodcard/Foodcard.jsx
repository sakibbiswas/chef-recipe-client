import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Foodcard = ({ country }) => {
    const { _id, name, img, image_url, title, experience, Numbers_of_recipes } = country
    return (
        <div>
            <Row md={1} className="g-1">

                <Col>
                    <Card className=' mb-3'>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <div className="">
                                    <p className='fw-semibold'>Years of experience:{experience} </p>
                                    <p> Numbers of recipes : {Numbers_of_recipes}</p>
                                </div>
                            </Card.Text>

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