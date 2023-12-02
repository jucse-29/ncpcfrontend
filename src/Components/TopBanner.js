import React, {Fragment} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";

import sem from "../Assets/Images/dept/seminar.png";
import s_minar from "../Assets/Images/dept/shaheed_minar.png";
import champs_ncpc from "../Assets/Images/alumni_photos/ncpc_champion.png";
import lab from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import ncpclogo from "../Assets/Images/Untitled.png";
import cse from "../Assets/Images/dept/Untitled - Copy.png";
import finalcse from "../Assets/Images/dept/finalcse.png";
import finalcse1 from "../Assets/Images/dept/finalcse1.png";
import mh from "../Assets/Images/dept/mh.png";
import night from "../Assets/Images/dept/night.png";
import jucse from "../Assets/Images/dept/ju_cse.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import Count from "../Components/Count";

import Typed from 'react-typed';

function TopBanner(props) {
    
    return (
        <Fragment>
             
            {/* <marquee className="mar" behavior="" direction="">**NCPC CSE JU**</marquee> */}
            <Container fluid="true" className='fullBanner'>
            {/* <Container fluid="true" className='bannerRight'>
              
                
                <h3> NCPC 2023
               </h3>
                <img className="jucselogoBanner1" src={ncpclogo} alt="" />
                
                
                <Button className="buttonBanner" variant="danger"><FontAwesomeIcon icon={faShare} beat size='xl'/> Register Now</Button>
            </Container> */}
            <Container fluid="true" className="topBanner">
               
                <Row className="p-0 m-0">

                    <Col className="m-0 p-0">
                        <Carousel className="card-carousel">
                        
                            <Carousel.Item>
                                {/* <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/NMYT0PnV9SSOx4IAzRUrg6UwweXWq1WBXshVwkNr.jpg" alt=""/> */}
                                <img className="carouselImg" src={green} alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6122_banner_bsmr_hall-3816f4.jpg" alt=""/> */}
                                 <img className="carouselImg" src={champs_ncpc}alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6121_banner_library-12a970.jpg" alt=""/> */}
                                <img className="carouselImg" src={mh} alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/wV9mgeB6A4nkMxihqKmPJ2tcCBB1YLdv5IVysRq1.jpg" alt=""/> */}
                                <img className="carouselImg" src={s_minar} alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now <FontAwesomeIcon icon={faHandPointer} beat /></Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/9wLQQCnx1eHfGeWG82uxBP67lv8fpdgPICigKt9o.jpg" alt=""/> */}
                                <img className="carouselImg" src={lab} alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
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
                
                <h3>
                    <Typed
          strings={['Hosted By']}
          typeSpeed={50}
          backSpeed={30}
          loop
        /></h3>
              
            {/* <div className='hostedbyDiv'> */}
                <h5>Department of Computer Science and Engineering <br/>(CSE)</h5>
                <p>Jahangirnagar University</p>
                {/* <img src={jucse} alt="" /> */}
                {/* </div> */}
            </Container>
           
            </Container>
        </Fragment>
    );
}

export default TopBanner;