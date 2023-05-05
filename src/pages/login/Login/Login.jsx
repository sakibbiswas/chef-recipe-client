import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form, Toast, ToastContainer } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../providers/Authprovider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../Hooks/Usetitle';


const Login = () => {
    useTitle('Login')
    const [error, seterror] = useState('')
    const [success, setsucces] = useState('')
    const { signIN, update, sendpasswordreset } = useContext(Authcontext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/country/0'
    console.log(location);
    const Navigate = useNavigate()
    const emailRef = useRef()
    const handellogin = (event) => {
        setsucces('')
        seterror('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // Validate
        if (password.length < 6) {
            seterror('Please add at least 6 characters in your password')
            return;
        }
        signIN(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                Navigate(from, { replace: true })
                seterror('')
                event.target.reset()
                setsucces('User has created successfully')
            })
            .catch(error => {
                console.log(error);
                seterror(error.message)
            })
        update()
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {

            });

    }
    const handelreset = (event) => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide your email address to reset password ')
        }
        sendpasswordreset(email)
            .then(() => {
                alert('Please check your email')
                return
            }).catch((error) => {
                seterror(error.message)
            });
    }

    return (

        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>

            <Form onSubmit={handellogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" name='email' required />



                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept tarms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success ">
                    <p>Forget password ? Please <Button onClick={handelreset} className='btn btn-link text-secondary ' variant="light">Reset password</Button></p>
                    Dont have an account ?  <Link to='/register'>Register</Link>

                </Form.Text>
                <Form.Text className="text-success">
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;