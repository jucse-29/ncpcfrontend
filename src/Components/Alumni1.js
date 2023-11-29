import React, {Fragment} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/alumni_photos/first.png";
import fifteen from "../Assets/Images/alumni_photos/2015.png";
import sixteen from "../Assets/Images/alumni_photos/2016.png";
import seventeen from "../Assets/Images/alumni_photos/2017.png";
import twenty_one from "../Assets/Images/alumni_photos/2021.png";

import img5 from "../Assets/Images/alumni_photos/5.png";
import sem from "../Assets/Images/dept/seminar.png";
import lab from "../Assets/Images/dept/lab_201.png";
import ncpclogo from "../Assets/Images/Untitled.png";
import cse from "../Assets/Images/dept/Untitled - Copy.png";
import ChoyonSirCard from "./ChoyonSirCard";
import AlumniCSS from '../Assets/CSS/AlumniCSS.css';


import img6 from "../Assets/Images/alumni_photos/sixth.png";

import { faAward} from "@fortawesome/free-solid-svg-icons";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import jucse from "../Assets/Images/dept/ju_cse.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {faHandPointer} from "@fortawesome/free-solid-svg-icons";

function Alumni1(props) {
    return (
        <Fragment>
            {/* <marquee className="mar" behavior="" direction="">**NCPC CSE JU**</marquee> */}
            <Container fluid="true" className='fullBanneralumni'>
            <Container fluid="true"  className='bannerRightalumni'>
            <Container fluid="true" className="alumniDivRight">
                   <h3 className="alumniTitle"> <FontAwesomeIcon icon={faAward} size="xl"/><span>     </span>ALUMNI SUCCESS STORIES</h3>
                      <hr/>
                      <p className="alumniDescription text-start p-3">The Department of Computer Science and Engineering,Jahangirnagar University, has seen a constellation of alumni shining brightly in various programming contests, both nationally and internationally. These individuals have not just secured good positions but have also etched the department's and the university's name in the hall of fame within the tech world.</p>  
                    </Container>
            </Container>
            <Container fluid="true" className="topBanneralumni">
               
                <Row className="p-0 m-0">

                    <Col className="m-0 p-0">
                        <Carousel className="card-carouselalumni">
                        
                        <Carousel.Item>
                                <div className="carouselItemContaineralumni">
                                    <img className="carouselImgalumni" src={fifteen} alt=""/>
                                    <div className="carouselCaptionalumni">
                                        <h3>JU_Assassins</h3>
                                        <p>Aninda Majumder(CSE), Md. Nafis Sadique(IIT), Suman Bhadra(CSE) participated in ACM-ICPC 2015 World Finals and solved 6 problems.</p>
                                        {/* <Button className="contactBtn">See More</Button> */}
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselItemContaineralumni">
                                    <img className="carouselImgalumni" src={img6} alt=""/>
                                    <div className="carouselCaptionalumni">
                                        <h3>JU_O(N^3) </h3>
                                        <p>Md. Nafis Sadique(IIT), Niloy Datta(IIT), Raihat Zaman Neloy(CSE) secured 50th place at the ACM-ICPC 2016 World Finals solving 6 problems. </p>
                                        {/* <Button className="contactBtn">See More</Button> */}
                                    </div>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carouselItemContaineralumni">
                                    <img className="carouselImgalumni" src={img1} alt=""/>
                                    <div className="carouselCaptionalumni">
                                    <h3>JU_kzvd4729</h3>
                <p>JU_kzvd4729 led by Mahmudul Hasan Shanto(CSE-46), Richita Khandakar Rifat(CSE-46) and Alif Al Hasan(CSE-47) secured 3rd place at ICPC Regional 2021.</p>
                                        {/* <Button className="contactBtn">See More</Button> */}
                                    </div>
                                </div>
                            </Carousel.Item>
                          
                            
                        </Carousel>
                    </Col>
                      
                </Row>
               
            </Container>
           
            
            </Container>
        </Fragment>
    );
}

export default Alumni1;

