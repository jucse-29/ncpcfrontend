import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

function Honor(props) {
    return (
        <Container fluid className="text-center honorContainer">
            <Row className="p-0 m-2">
                <Col className="noticeDivLeft" md={8} lg={8} sm={12}>
                    <h4 className="noticeTitle text-center">About JU CSE</h4>
                    <Carousel className="card-carousel">
                        {/* Carousel items here */}
                    </Carousel>
                    <p className="description text-start p-3">
                        <hr />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquid at blanditiis commodi consequuntur corporis deleniti doloremque dolorum ducimus eos error, expedita fuga illo inventore libero natus non nulla numquam porro possimus qui quibusdam quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>

                <Col md={4} lg={4} sm={12}>
                    <Container flui="true" className="noticeDivRight">
                        <div className="noticeDivRightheading">
                            <h3 className="noticeTitle">
                                <FontAwesomeIcon icon={faBell} beatFade size="l" />
                                <span>     </span>Notice
                            </h3>
                        </div>
                        <a href="sekulhassan.cm">1. Registration Rules</a>
                        <hr />
                        {/* Other notice links */}
                        <a href="sekulhassan.cm" className="seeMoreLink">
                            See More...
                        </a>
                        <hr />
                    </Container>
                    <div className="carouselItemContainerSpeech">
                        <h5 className="noticeTitleSpeech">
                            <FontAwesomeIcon icon={faUser} /> Speech from Respected Personalities
                        </h5>
                        <hr />
                        <Carousel className="carouselVideo">
                            {/* Carousel items here */}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Honor;
