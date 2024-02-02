import { Container, Row, Col } from "react-bootstrap";
import "./../App.css";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gallary1 from "./../image/gallary1.jpeg";
import gallary2 from "./../image/gallary2.jpeg";
import gallary3 from "./../image/gallary3.jpeg";
import gallary4 from "./../image/gallary4.jpeg";
import gallary5 from "./../image/gallary5.jpeg";


function Gallary() {
    const option = {
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5
          }
        }
      }
    return (
        <>
            <div className="gallary">
                <div className="spacer">
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>Sneak Peak Gallery</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae</p>
                                        <p>recusandae qui aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex?</p>
                                        <p>Porro, praesentium consectetur tempore. Nulla, error eius dolorem.</p></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="pt-5"> 
                        <Row>
                            <Col>
                                <OwlCarousel className='owl-theme' loop margin={10} dots={false} autoplay={true} autoplayTimeout={1000} autoplaySpeed={1000} {...option}>
                                    <div class='item'>
                                        <div className="gallary_img">
                                            <img src={gallary1}></img>
                                        </div>
                                    </div>
                                    <div class='item'>
                                    <div className="gallary_img">
                                            <img src={gallary2}></img>
                                        </div>
                                    </div>
                                    <div class='item'>
                                    <div className="gallary_img">
                                            <img src={gallary3}></img>
                                        </div>
                                    </div>
                                    <div class='item'>
                                    <div className="gallary_img">
                                            <img src={gallary4}></img>
                                        </div>
                                    </div>
                                    <div class='item'>
                                    <div className="gallary_img">
                                            <img src={gallary5}></img>
                                        </div>
                                    </div>
                                    
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Gallary;