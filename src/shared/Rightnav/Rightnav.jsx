import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Rightnav = () => {
    return (
        <div>
            <h3>Login with</h3>
            <div>
                <Button className='mb-2' variant="primary"> <FaGoogle /> Login with google</Button>
                <Button variant="secondary"> <FaGithub /> Login with github</Button>
            </div>
            <div>
                <h2>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF>
                        Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    );
};

export default Rightnav;