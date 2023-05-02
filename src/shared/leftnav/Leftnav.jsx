import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic1 from '../../../public/assets/berries-2277__340.jpg'
import pic2 from '../../../public/assets/Good_Food_Display_-_NCI_Visuals_Online.jpg'
import pic3 from '../../../public/assets/spaghetti-1932466__340.jpg'

const Leftnav = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setcountries(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h4>ALL countries</h4>
            <div className="ps-4">
                {
                    countries.map(country => <p
                        key={country.id}
                    >
                        <Link to={`/country/${country.id}`} className='text-decoration-none text-black fw-semibold'>{country.name}</Link>
                    </p>)
                }
            </div>
            <Row xs={1} md={2} lg={1} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                            <Card.Title>Convenience foods</Card.Title>
                            <Card.Text>
                                Confectionery is divided into two broad and somewhat overlapping categories, bakers' confections and sugar confections.[21] Bakers'
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                            <Card.Title>Appetizers</Card.Title>
                            <Card.Text>
                                Dried foods Drying is a method of food preservation that works by removing water from the food, which inhibits the growth of bacteria and
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic3} />
                        <Card.Body>
                            <Card.Title>Confectionery</Card.Title>
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
    );
};

export default Leftnav;