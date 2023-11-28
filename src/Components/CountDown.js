import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function CountDown(props) {
    const[day,setDay] = useState(50);
    const[hour,setHour] = useState(23);
    return (
        <Container>
            <Row>
                <Col md={3} lg={3} sm={6}>
                    <h4>DAY</h4>
                    <div className="spanDiv">
                        <span>2</span>
                        <span className="mx-2">3</span>
                    </div>
                </Col>
                <Col md={3} lg={3} sm={6}>
                    <h4>HOURS</h4>
                    <div>
                        <span>2</span>
                        <span className="mx-2">3</span>
                    </div>
                </Col>
                <Col md={3} lg={3} sm={6}>
                    <h4>MINUTES</h4>
                    <div>
                        <span>2</span>
                        <span className="mx-2">3</span>
                    </div>
                </Col>
                <Col md={3} lg={3} sm={6}>
                    <h4>SECOND</h4>
                    <div>
                        <span>2</span>
                        <span className="mx-2">3</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CountDown;