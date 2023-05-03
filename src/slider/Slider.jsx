import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../public/assets/vegetarian-recipes-banner-healthy-vegetables-bowl-pan-soup-kitchenware-wooden-surface-57263921.jpg'
import slider2 from '../../public/assets/cooking-tips-receipes-landing-page-template-top-view-table-chefs-hands-online-recipes-courses-homepage-mobile-app-182808823.jpg'
import slider3 from '../../public/assets/spring-recipe-web-banner.jpg'
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