import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";

import "./Qustion.css";
import useTitle from '../../Hooks/Usetitle';
const ref = React.createRef();

const Qustion = () => {
  useTitle('Blogs')
  return (
    <Container className="App w-50">
      <div className='mt-4'>
        <Pdf targetRef={ref} filename="Blogs.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>
      </div>


      <div className='mb-4' ref={ref}>
        <div>
          <div className=' border  p-3 border-2  bg-gradient mb-3 mt-4 border-dark'>
            <h2> Differences between uncontrolled and controlled components?</h2>
            <p className='text-secondary fw-semibold'><strong>Ans : </strong>
              In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
            </p>
          </div>
          <div className=' border  p-3 border-2  bg-gradient mb-3 mt-4 border-dark'>
            <h2> How to validate React props using PropTypes?</h2>
            <p className='text-secondary fw-semibold'><strong>Ans : </strong>
              When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.
              <br />
              1.PropTypes.any : The prop can be of any data type.
              2.PropTypes.bool : The prop should be a Boolean.
              3.PropTypes.number : The prop should be a number.
              4.PropTypes.string : The prop should be a string.
              5.PropTypes.func : The prop should be a function.
              6.PropTypes.array : The prop should be an array.
            </p>
          </div>
          <div className=' border  p-3 border-2  bg-gradient mb-3 mt-4 border-dark'>
            <h2>Difference between nodejs and express js?</h2>
            <p className='text-secondary fw-semibold'><strong>Ans : </strong>
              NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and response
            </p>
          </div>

          <div className=' border  p-3 border-2  bg-gradient mb-3 mt-4 border-dark'>
            <h2> What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-secondary fw-semibold'><strong>Ans : </strong>
              In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Qustion;