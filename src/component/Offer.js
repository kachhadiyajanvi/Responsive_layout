import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import offer from './../image/offer.jpeg';
import { IoAlarmOutline,IoBriefcaseOutline,IoMailOutline,IoLockClosedOutline } from "react-icons/io5";
function Offer() {
    return (
        <>
            <div className='Offer'>
                <div className='spacer'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>What Do We Offer</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit</p>
                                        <p>amet, consectetur adipisicing elit. Voluptates, earum.</p></div>
                                    <div className='line d-flex justify-content-center'><div></div></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='g-3 pt-5'>
                            <Col md={3} className='d-none d-lg-block'>
                                <div className='Offer_img'>
                                    <img src={offer}></img>
                                </div>
                            </Col>
                            <Col className='d-flex align-items-center'>
                                <Row className='g-3'>
                                    <Col md={6}>
                                        <div className='single_offer'>
                                            <i><span><IoAlarmOutline></IoAlarmOutline></span></i>
                                            <h4>Time Management</h4>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce vitae risus nec dui venenatis.</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className='single_offer'>
                                            <i><span><IoBriefcaseOutline></IoBriefcaseOutline></span></i>
                                            <h4>Marketing Ideas</h4>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce vitae risus nec dui venenatis.</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className='single_offer'>
                                            <i><span><IoMailOutline></IoMailOutline></span></i>
                                            <h4>Mail Support</h4>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce vitae risus nec dui venenatis.</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className='single_offer'>
                                            <i><span><IoLockClosedOutline></IoLockClosedOutline></span></i>
                                            <h4>Secure System</h4>
                                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Fusce vitae risus nec dui venenatis.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Offer;