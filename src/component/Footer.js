import './../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <>
            <div className='bgblack'>
                <div className='spacer'>
                    <Container>
                        <Row>
                            <Col lg={3} md={6}>
                                <div className='footer1'>
                                    <div className='footer_heading'>
                                        <span>ABOUT</span>
                                    </div>
                                    <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='footer2'>
                                    <div className='footer_heading'>
                                        <span>OUR SERVICES</span>
                                    </div>
                                    <ul className='footer_menu'>
                                        <li><a href='#'>Graphic Design</a></li>
                                        <li><a href='#'>Web Design</a></li>
                                        <li><a href='#'>Web Development</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                            <div className='footer2'>
                                    <div className='footer_heading'>
                                        <span>QUICK LINKS</span>
                                    </div>
                                    <ul className='footer_menu'>
                                        <li><a href='#'>Partners</a></li>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>FAQ's</a></li>
                                        <li><a href='#'>Badges</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                            <div className='footer2'>
                                    <div className='footer_heading'>
                                        <span>CONNECT WITH US SOCIALLY</span>
                                    </div>
                                    <ul className='footer_menu'>
                                        <li><a href='#'>Facebook</a></li>
                                        <li><a href='#'>Twitter</a></li>
                                        <li><a href='#'>Youtube</a></li>
                                        <li><a href='#'>Pinterest</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='bgblackcolor'>
                <Container>
                    <Row className='p-4 text-center'>
                        <Col>
                            <div className='end_footer'>
                                <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                                <p>Design And Developed By <span>Themefisher</span></p>
                                <p>Distributed By<span> Themewagon</span></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Footer;