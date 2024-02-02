import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import agency from './../image/agency.png';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Agency() {
    return (
        <>
            <div className='bgagencycolor'>
                <div className='spacer'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>We Are Bingo Agency</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit</p>
                                        <p>amet, consectetur adipisicing elit. Voluptates, earum.</p></div>
                                    <div className='line d-flex justify-content-center'><div></div></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-5 g-4'>
                            <Col lg={6}>
                                <div className='agency_img'>
                                    <img src={agency}></img>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <ul className='agency_list'>
                                        <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                                        <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                                        <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                                        <li>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
                                        <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                                    </ul>
                                    <div className='agency_btn'>
                                    <a className='theme_btn'>LEARN MORE</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
};
export default Agency;