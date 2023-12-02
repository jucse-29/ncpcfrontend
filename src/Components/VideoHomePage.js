import React, { Fragment, useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

function VideoHomePage(props) {
  const [videoPlayer, setVideoPlayer] = useState(null);

  // YouTube video settings
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onVideoReady = (event) => {
    setVideoPlayer(event.target);
  };

  const playPauseVideo = () => {
    if (videoPlayer) {
      if (videoPlayer.getPlayerState() === 1) {
        videoPlayer.pauseVideo();
      } else {
        videoPlayer.playVideo();
      }
    }
  };

  return (
    <Fragment>
      <Container fluid className="topBanner">
        <Row className="p-0 m-0">
          <Col className="m-0 p-0">
            <Carousel className="card-carousel-video">
              <Carousel.Item>
                <YouTube videoId='QT2voPSg0Rc' opts={opts} onReady={onVideoReady} />
                <Carousel.Caption>
                  <Button className="contactBtn" onClick={playPauseVideo}>
                    {videoPlayer && videoPlayer.getPlayerState() === 1 ? 'Pause' : 'Play'} Video 1
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <YouTube videoId='QT2voPSg0Rc' className="carouselVideo" opts={opts} onReady={onVideoReady} />
                <Carousel.Caption>
                  <Button className="contactBtn" onClick={playPauseVideo}>
                    {videoPlayer && videoPlayer.getPlayerState() === 1 ? 'Pause' : 'Play'} Video 1
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel.Item with different video IDs and buttons */}
            </Carousel>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default VideoHomePage;
