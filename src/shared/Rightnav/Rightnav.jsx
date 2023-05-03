import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Foodpic from '../foodpic/Foodpic';
import { Authcontext } from '../../providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const Rightnav = () => {
    const { singnInGoogle, githubsignIn } = useContext(Authcontext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/country/0'
    console.log(location);
    const Navigate = useNavigate()
    const handelgoogle = () => {
        singnInGoogle()
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const hadelgithub = () => {
        githubsignIn()
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h3>Login with</h3>
            <div >
                <Button onClick={handelgoogle} className='mb-2 ' variant="primary"> <FaGoogle /> Login with google</Button>
                <Button onClick={hadelgithub} variant="secondary"> <FaGithub /> Login with github</Button>
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
            <Foodpic></Foodpic>
        </div>
    );
};

export default Rightnav;