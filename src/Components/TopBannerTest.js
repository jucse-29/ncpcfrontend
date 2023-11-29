import React, {Fragment} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import lab from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import ncpclogo from "../Assets/Images/Untitled.png";
import cse from "../Assets/Images/dept/Untitled - Copy.png";
import mh from "../Assets/Images/dept/mh.png";
import night from "../Assets/Images/dept/night.png";
import jucse from "../Assets/Images/dept/ju_cse.png";
function TopBannerTest(props) {
    return (
        <Fragment>
            <marquee className="mar" behavior="" direction="">**NCPC CSE JU**</marquee>
            <Container fluid="true" className="topBannerTest">
                <Row className="p-0 m-0">
                    <Col className="m-0 p-0" lg={2} md={2} sm={12}>
                       
                        <Container fluid="true" className='bannerRightTest'>
                <h3>NCPC 2023</h3>
                <img className="jucselogoBanner1" src={ncpclogo} alt="" />
                
                {/* <img className="jucselogoBanner"src={jucse} alt="" /> */}
                <Button className="buttonBannerTest" variant="danger"><FontAwesomeIcon icon={faShare} beat size='xl'/> Register Now</Button>
            </Container>
                      
                    </Col>
                    <Col className="m-0 p-0" lg={8} md={8} sm={12}>
                        <Carousel className="card">
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/NMYT0PnV9SSOx4IAzRUrg6UwweXWq1WBXshVwkNr.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6122_banner_bsmr_hall-3816f4.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6121_banner_library-12a970.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/wV9mgeB6A4nkMxihqKmPJ2tcCBB1YLdv5IVysRq1.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/9wLQQCnx1eHfGeWG82uxBP67lv8fpdgPICigKt9o.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    
                    <Col className="m-0 p-0" lg={2} md={2} sm={12}>
                       
                       <Container fluid="true" className='bannerRightTest'>
                       <h3>Hosted By</h3>
                <img className="jucselogoBanner1" src={cse} alt="" />
                
                <img src={jucse} alt="" />
                <Button className='buttonBannerTest' variant="danger">Register Now  <FontAwesomeIcon icon={faReply} beat size='xl'/></Button>
                       </Container>
                     
                   </Col>
                
                </Row>
            </Container>
        </Fragment>
    );
}

export default TopBannerTest;