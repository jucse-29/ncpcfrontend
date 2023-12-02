import { Col, Container, Row, Button,Carousel } from "react-bootstrap";
import React, { useState } from 'react';
import img1 from "../Assets/Images/alumni_photos/first.png";
import img2 from "../Assets/Images/alumni_photos/second.png";

import img6 from "../Assets/Images/alumni_photos/sixth.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward} from "@fortawesome/free-solid-svg-icons";


const Alumni = () => {
  

  return (
    <Container fluid="true" className="imageGallery">
       <Row className="p-0 m-0 d-flex align-items-center justify-content-center">
                <Col md={8} lg={8} sm={12}>
               <Container className="alumniDivleft">
            <Carousel className="card-carousel-alumni">
    <Carousel.Item>
        <div className="carouselItemContainer">
            <img className="carouselImg" src={img2} alt=""/>
            <div className="carouselCaption">
                <h3>JU_Assassins</h3>
                <p>Aninda Majumder(CSE), Md. Nafis Sadique(IIT), Suman Bhadra(CSE) participated in ACM-ICPC 2015 World Finals and solved 6 problems.</p>
                {/* <Button className="contactBtn">See More</Button> */}
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className="carouselItemContainer">
            <img className="carouselImg" src={img1} alt=""/>
            <div className="carouselCaption">
                <h3>JU_kzvd4729</h3>
                <p>JU_kzvd4729 led by Mahmudul Hasan Shanto(CSE-46), Richita Khandakar Rifat(CSE-46) and Alif Al Hasan(CSE-47) secured 3rd place at ICPC Regional 2021.</p>
                {/* <Button className="contactBtn">See More</Button> */}
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className="carouselItemContainer">
            <img className="carouselImg" src={img6} alt=""/>
            <div className="carouselCaption">
                <h3>JU_O(N^3) </h3>
                <p>Md. Nafis Sadique(IIT), Niloy Datta(IIT), Raihat Zaman Neloy(CSE) secured 50th place at the ACM-ICPC 2016 World Finals solving 6 problems. </p>
                {/* <Button className="contactBtn">See More</Button> */}
            </div>
        </div>
    </Carousel.Item>
    {/* Other carousel items go here */}
</Carousel>

                </Container>
                </Col>
               
           
                <Col md={4} lg={4} sm={12} className="d-flex align-items-center justify-content-center">
                    <Container fluid="true" className="alumniDivRight">
                   <h3 className="alumniTitle"> <FontAwesomeIcon icon={faAward} size="xl"/><span>     </span>ALUMNI SUCCESS STORIES</h3>
                      <hr/>
                      <p className="alumniDescription text-start p-3">The Department of Computer Science and Engineering,Jahangirnagar University, has seen a constellation of alumni shining brightly in various programming contests, both nationally and internationally. These individuals have not just secured good positions but have also etched the department's and the university's name in the hall of fame within the tech world.</p>  
                    </Container>
                   
                </Col>
                
            </Row>
            
    </Container>
    
    
  );
};

export default Alumni;