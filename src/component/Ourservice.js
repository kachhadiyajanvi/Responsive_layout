import "./../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineFileCopy } from "react-icons/md";
import { IoAlarmOutline,IoBookOutline,IoBriefcaseSharp,IoCropSharp ,IoHome   } from "react-icons/io5";
function Ourservice() {
    return (
        <>
            <div className="spacer">
                <Container>
                    <Row>
                        <Col>
                            <div className='heading'>
                                <h1 className='title1'>Our Services</h1>
                                <div className='title2'> <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed</p>
                                <p>condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt</p>
                                    <p>metus. Morbi sed tortor a risus luctus dignissim.</p></div>
                                <div className='line d-flex justify-content-center'><div></div></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-lg-0 g-4 pt-4">
                        <Col lg={4} md={6}>
                            <div className="service_item1">
                                <div className="service_img">
                                    <i><MdOutlineFileCopy></MdOutlineFileCopy></i>
                                </div>
                                <div className="service_info">
                                    <h5>WORDPRESS THEME</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="service_item2">
                                <div className="service_img">
                                    <i><IoAlarmOutline></IoAlarmOutline></i>
                                </div>
                                <div className="service_info">
                                    <h5>RESPONSIVE DESIGN</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="service_item1">
                                <div className="service_img">
                                    <i><IoBookOutline></IoBookOutline></i>
                                </div>
                                <div className="service_info">
                                    <h5>MEDIA & ADVERTISEMENT</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="service_item2">
                                <div className="service_img">
                                    <i><IoBriefcaseSharp ></IoBriefcaseSharp ></i>
                                </div>
                                <div className="service_info">
                                    <h5>GRAPHIC DESIGN</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="service_item1">
                                <div className="service_img">
                                    <i><IoCropSharp ></IoCropSharp ></i>
                                </div>
                                <div className="service_info">
                                    <h5>APPS DEVELOPMENT</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="service_item2">
                                <div className="service_img">
                                    <i><IoHome ></IoHome ></i>
                                </div>
                                <div className="service_info">
                                    <h5>NETWORKING </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                                </div>
                                <div className="service_info">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Ourservice;