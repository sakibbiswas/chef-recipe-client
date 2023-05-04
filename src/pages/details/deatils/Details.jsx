import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import pic1 from "../../../../public/assets/Haleem-960x960.jpg.webp"
import pic2 from "../../../../public/assets/Seekh-Kebab-960x960.jpg.webp"
import pic3 from "../../../../public/assets/Falooda-1-960x960.jpg.webp"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const Details = () => {
    const [Accepted, setAccepted] = useState(true);
    const notify = () => {

        if (!Accepted) {
            // toast("Wow so easy !");

        }
        else {
            setAccepted();
            toast("This recipe is favorite !");

        }
    }


    const chefdata = useLoaderData();
    // console.log(chefdata);
    const { title, details, Biodata, name, rating, author, _id, image_url, thumbnail_url, experience, likes, number, some_recipe } = chefdata;


    return (

        <Container>

            <Card className='mb-4' >


                <LazyLoadImage variant='top' effect="blur"
                    className='w-100' src={image_url} />




                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {Biodata}
                    </Card.Text>
                    <p className='fw-semibold'> <strong className='text-secondary'>Experience :</strong> {experience}</p>
                    <p className='fw-semibold'> <strong className='text-secondary'>Likes</strong> {author.likes}</p>
                    <h6 className='fw-semibold '> <strong className='text-secondary'> Some_recipe:</strong> {some_recipe}</h6>
                    <Link to='/country/0'>
                        <Button variant="warning">Go back Home</Button>
                    </Link>
                </Card.Body>
            </Card>


            <div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card className='mb-4'>

                            <LazyLoadImage variant='top' effect="blur"
                                className='w-100' src={pic1} />
                            <Card.Body>
                                <Card.Title> Haleem</Card.Title>
                                <Card.Text>
                                    Haleem is an Arabic dish. It is a popular stew made with meat—usually beef or mutton—lentils, barley, and spices. It is sold on street stalls and in bazaars (markets) as a snack, and making haleem involves a lengthy and complex process. It can be served with mint,
                                </Card.Text>
                                <div className="flex-grow-1 mb-3 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <div >

                                    <Button onClick={notify} variant="primary" disabled={!Accepted}>Favorite</Button>
                                    <ToastContainer />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>

                            <LazyLoadImage variant='top' effect="blur"
                                className='w-100' src={pic2} />





                            <Card.Body>
                                <Card.Title>Seekh Kebab</Card.Title>
                                <Card.Text>
                                    Seekh Kebab is a Turkish dish that has become very popular in Bangladesh. The beef is prepared with various spices creating unique flavors. It is a delicious appetizer, soft and succulent and seasoned with ginger, garlic, green chili pepper, powdered chili,
                                </Card.Text>
                                <div className="flex-grow-1 
                               mb-3 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <Button onClick={notify} variant="primary" disabled={!Accepted}>Favorite</Button>
                                <ToastContainer />
                            </Card.Body>
                        </Card>
                    </Col >
                    <Col >
                        <Card>
                            <LazyLoadImage variant='top' effect="blur"
                                className='w-100' src={pic3} />



                            <Card.Body>
                                <Card.Title> Falooda </Card.Title>
                                <Card.Text>
                                    Falooda is a well known cold dessert made by mixing rose syrup and sweet basil seeds with milk, noodles, ice cream, and vermicelli. But in Bangladesh, it is made it a little differently. Here, it is made with pandan extract, pistachios, sago pearls, creamed coconut mango,
                                </Card.Text>
                                <div className="flex-grow-1 mb-3 d-flex align-items-center ">
                                    <Rating style={{ maxWidth: 250 }} value={Math.round(rating?.number || 0)} readOnly />
                                    <span className='ms-2'>{rating?.number}</span>
                                </div>
                                <Button onClick={notify} variant="primary" disabled={!Accepted}>Favorite</Button>
                                <ToastContainer />
                            </Card.Body>
                        </Card>
                    </Col>



                </Row >
            </div >


        </Container >
    )
};

export default Details;