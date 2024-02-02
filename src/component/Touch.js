import { Container, Row, Col, Form,Button } from "react-bootstrap";
import { FaFacebookF, FaHouseChimneyWindow, FaMobileScreenButton, FaEarthAmericas, FaEnvelope, FaTwitter, FaDribbble, FaLinkedinIn } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../App.css";

function Touch() {
    return (
        <>
            <div className="touch">
                <div className="spacer">
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>Get In Touch</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit</p>
                                        <p>amet, consectetur adipisicing elit. Voluptates, earum.</p></div>
                                    <div className='line d-flex justify-content-center'><div></div></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="g-5 pt-4 ">
                            <Col lg={6}>
                                <div className="touch_info">
                                    <h2>Contact Details</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
                                    <ul className="touch_icon">
                                        <li><span><FaHouseChimneyWindow ></FaHouseChimneyWindow></span> Khaja Road, Bayzid, Chittagong, Bangladesh</li>
                                        <li><span><FaMobileScreenButton ></FaMobileScreenButton></span> Phone: +880-31-000-000</li>
                                        <li><span><FaEarthAmericas ></FaEarthAmericas></span> Fax: +880-31-000-000</li>
                                        <li><span><FaEnvelope ></FaEnvelope></span> Email: hello@meghna.com</li>
                                    </ul>
                                    <ul className="touch_icon1 d-flex">
                                        <li><span><FaFacebookF></FaFacebookF></span></li>
                                        <li><span><FaTwitter ></FaTwitter></span></li>
                                        <li><span><FaDribbble ></FaDribbble></span></li>
                                        <li><span><FaLinkedinIn ></FaLinkedinIn></span></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6} >
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control type="email" placeholder="Your Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                         <Form.Control as="textarea" rows={3}  placeholder="Message"/> 
                                    </Form.Group>
                                    <Button type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Touch;