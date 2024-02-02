import "./../App.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import about from "./../image/about.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Aboutus() {
    return (
        <section>
            <div className="aboutus">
                <div className="spacer">
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>About Us</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa placeat</p>
                                        <p>voluptas tempore recusandae quasi nesciunt in, facilis animi. Sint,</p>
                                        <p>possimus?</p></div>
                                    <div className='line d-flex justify-content-center'><div></div></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="g-5 pt-5">
                            <Col lg={6}>
                                <div className="about_img">
                                    <img src={about}></img>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="about_info">
                                    <p className="color pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula. Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a.</p>
                                    <p className="color pb-3">Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a</p>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <ul className="about_menu ">
                                        <li><span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span> Web Development</li>
                                        <li><span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span> Application Development</li>
                                        <li><span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span> Website Design</li>
                                        <li><span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span> UI/UX Design</li>
                                        <li><span><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></span> SEO Service</li>
                                    </ul>
                                    <div className="agency_btn">
                                        <a href="#" className="theme_btn">LEARN MORE</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}
export default Aboutus;