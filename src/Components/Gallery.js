import React, {Fragment} from 'react';
import {Button, Carousel, Col, Row} from "react-bootstrap";
function Gallery(props) {
    return (
        <Fragment>
            {/* <marquee className="mar" behavior="" direction="">**NCPC CSE JU**</marquee> */}
           
                <Row className="rowGallery p-0 m-0">

                    <Col className="m-0 p-0">
                        <Carousel className="card-carousel-gallery">
                            <Carousel.Item>
                                <img className="carouselImgGallery" src="https://juniv.edu/storage/image/gallery/NMYT0PnV9SSOx4IAzRUrg6UwweXWq1WBXshVwkNr.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtnGallery">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImgGallery" src="https://juniv.edu/storage/image/gallery/6122_banner_bsmr_hall-3816f4.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtnGallery">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImgGallery" src="https://juniv.edu/storage/image/gallery/6121_banner_library-12a970.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtnGallery">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImgGallery" src="https://juniv.edu/storage/image/gallery/wV9mgeB6A4nkMxihqKmPJ2tcCBB1YLdv5IVysRq1.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtnGallery">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImgGallery" src="https://juniv.edu/storage/image/gallery/9wLQQCnx1eHfGeWG82uxBP67lv8fpdgPICigKt9o.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtnGallery">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                   
                </Row>
               
           
        </Fragment>
    );
}

export default Gallery;

