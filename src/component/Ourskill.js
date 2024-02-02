import "./../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ourskill() {
    return (
        <>
            <div className="spacer">
                <Container>
                    <Row>
                        <Col>
                            <div className='heading'>
                                <h1 className='title1'>Our Skills</h1>
                                <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat, vel</p>
                                <p>veniam, eos et delectus eveniet molestiae. Esse, voluptas ratione.</p></div>
                                <div className='line d-flex justify-content-center'><div></div></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-0">
                        <Col md={5}>
                            <div className="skill_info">
                                <h2>Simple To Start </h2>
                                <p>Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in faucibus lorem accumsan non. Donec mattis tin unt metuorbi sed tort Igor aman luctus dignissim. Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in faucibus lorem accumsan non.</p>
                                <div className="skill_btn">
                                    <a href="#" className="theme_btn">CONTACT US</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="skill_rate">
                                <div className="skill_item">
                                    <p>Photoshop</p>
                                    <div className="rate"></div>
                                </div>
                                <div className="skill_item">
                                    <p>Web Application</p>
                                    <div className="rate1"></div>
                                </div>
                                <div className="skill_item">
                                    <p>Andriod Application</p>
                                    <div className="rate2"></div>
                                </div>
                                <div className="skill_item">
                                    <p>IOS Development</p>
                                    <div className="rate3"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Ourskill;