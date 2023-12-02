// Honor.js
import React from 'react';
import Honor11 from "../Assets/CSS/Honor11.css";
import {Col, Container, Row,Carousel } from "react-bootstrap";
import choyon from "../Assets/Images/choyon.jpg";
import ChoyonSirCard from "./ChoyonSirCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Honor(props) {
    return (
        <Container fluid="true" className="text-center mt-5 honorContainer1">
            <Row className="p-0 m-2">
                <Col className="noticeDivLeft1" md={6} lg={6} sm={12}>
                    <h4 className="noticeTitle1 text-center">About JU CSE</h4>
                    <img className="juShoidMinar" src="https://i.pinimg.com/originals/9c/b5/0e/9cb50e29be9f450bb8e0b36d4f8ccdf6.jpg" alt=""/>
                    <p className="description1 text-start p-3">

                        <hr/>
                        Lorem ipsum dolor sit amet, consectetur  quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>

                {/* <Col md={4} lg={4} sm={12} >
                    
                    <div className="noticeDivRight1">
                        <div className="noticeDivRightheading1">
                   <h3 className="noticeTitle1"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        
                        
                        </div>
                        
                        <a href="#">1. Registration Rules</a>
                        <hr/>
                        <a href="#">2. Accomodation</a>
                        <hr/>
                        <a href="#">3. Payment Details</a>
                        <hr/>
                        <a href="#">4. Main Contest Date</a>
                        <hr/>
                        <a href="#" className="seeMoreLink">See More...</a>  
                        <hr/>  
                    </div>
                   
                </Col> */}
                <Col md={6} lg={6} sm={12} >
                <container fluid="true" className="carouselItemContainerSpeech1">
                        <h5 className="noticeTitleSpeech1"><FontAwesomeIcon icon={faUser} />     Speech from Respected Personalities </h5>
                        <hr/>
                        <Carousel className='carouselVideo1'>
      <Carousel.Item>
        <div >
        <iframe className='carouselVideoframe1'width="460" height="415" src="https://www.youtube.com/embed/bC4kQ2-kHZE?si=YNCq8mEbLr2EOU7P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="carouselCaptionSpeech1">
            <h6>Abraham Lincoln</h6>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div >
        <iframe width="460" height="415" src="https://www.youtube.com/embed/UF8uR6Z6KLc?si=vqzt33t2fjHVALCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="carouselCaptionSpeech1">
            <h6>Steve Jobs</h6>
          </div>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for other videos */}
    </Carousel>
                    </container>
                   
                  
                </Col>
            </Row>
            <Row className='p-0 m-2'>
                <Col md={6} lg={6} sm={12} >
                    
                    <div className="noticeDivRight1">
                        <div className="noticeDivRightheading1">
                   <h3 className="noticeTitle1"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        
                        
                        </div>
                        
                        <a href="#">1. Registration Rules</a>
                        <hr/>
                        <a href="#">2. Accomodation</a>
                        <hr/>
                        <a href="#">3. Payment Details</a>
                        <hr/>
                        <a href="#">4. Main Contest Date</a>
                        <hr/>
                        <a href="#" className="seeMoreLink">See More...</a>  
                        <hr/>  
                    </div>
                   
                </Col>
                <Col md={6} lg={6} sm={12} >
                    
                    <div className="noticeDivRight1">
                        <div className="noticeDivRightheading1">
                   <h3 className="noticeTitle1"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        
                        
                        </div>
                        
                        <a href="#">1. Registration Rules</a>
                        <hr/>
                        <a href="#">2. Accomodation</a>
                        <hr/>
                        <a href="#">3. Payment Details</a>
                        <hr/>
                        <a href="#">4. Main Contest Date</a>
                        <hr/>
                        <a href="#" className="seeMoreLink">See More...</a>  
                        <hr/>  
                    </div>
                   
                </Col>
            </Row>
        </Container>
    );
}

export default Honor;
