import React, {Fragment} from 'react';
import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import s_minar from "../Assets/Images/dept/shaheed_minar.png";
import champs_ncpc from "../Assets/Images/alumni_photos/ncpc_champion.png";
import lab from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";

import mh from "../Assets/Images/dept/mh.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import Count from "../Components/Count";


function TopBanner(props) {
    
    return (
        <Fragment>
            <Container fluid="true" className='fullBanner'>
            <Container fluid="true" className="topBanner">
               
                <Row className="p-0 m-0">

                    <Col className="m-0 p-0">
                        <Carousel className="card-carousel">
                            <Carousel.Item>
                                <img className="carouselImg" src={green} alt=""/>
                                <Carousel.Caption>
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                 <img className="carouselImg" src={champs_ncpc} alt=""/>
                                <Carousel.Caption>
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src={mh} alt=""/>
                                <Carousel.Caption>
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src={s_minar} alt=""/>
                                <Carousel.Caption>
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src={lab} alt=""/>
                                <Carousel.Caption>
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
                <Container fluid="true" className='bannerRight'>
                    <Count/>
                    <Button className='buttonBanner' variant="danger">Register Now  <FontAwesomeIcon icon={faReply} /></Button>
                    <h5>Department of Computer Science and Engineering <br/>(CSE)</h5>
                    <p>Jahangirnagar University</p>
                </Container>
            </Container>
        </Fragment>
    );
}

export default TopBanner;