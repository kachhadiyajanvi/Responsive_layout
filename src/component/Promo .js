import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../App.css";
import video from "./../image/video.webm";

function Promo() {
    return (
        <>
            <div className="spacer">
                <Container>
                    <Row>
                        <Col>
                            <div className='heading'>
                                <h1 className='title1'>Our Promo Video</h1>
                                <div className='title2'> <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu.Sed</p>
                                    <p>condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt</p>
                                    <p>metus. Morbi sed tortor a risus luctus dignissim.</p></div>
                                <div className='line d-flex justify-content-center'><div></div></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col className="text-center video">
                            <video width="800px" controls autoPlay>
                                <source src={video} type="video/mp4"></source>
                            </video>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
                )
}
                export default Promo;