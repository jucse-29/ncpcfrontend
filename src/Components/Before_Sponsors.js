import React, {Fragment} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import Typed from 'react-typed';


function Before_Sponsors(props) {
    return (
        <Fragment>
            
            <Container fluid="true" className='ending_message'>
            <h1> <Typed
          strings={['Important Dates']}
          typeSpeed={50}
          backSpeed={30}
          loop
        /></h1>
            <h4>Registration Starts:<Typed
          strings={['20th January, 2024']}
          typeSpeed={50}
          backSpeed={30}
          loop
        /></h4>
            <h4>Registration Starts:</h4>
            </Container>
        </Fragment>
    );
}

export default Before_Sponsors;

