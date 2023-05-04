import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../public/assets/spring-recipe-web-banner.jpg'
import slider2 from '../../public/assets/Good_Food_Display_-_NCI_Visuals_Online.jpg'
import slider3 from '../../public/assets/vegetables-752153__340.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Slider = () => {
    return (
        <div  >
            <Carousel  >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block  w-100"
                        src={slider1}
                        alt="First slide"
                    />

                    <Carousel.Caption>

                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "

                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;