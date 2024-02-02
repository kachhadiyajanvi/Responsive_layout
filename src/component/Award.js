import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { IoAlarmOutline, IoEarthOutline } from 
"react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

function Award() {
    return (
        <>
            <div className='award'>
                <div className='spacer'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>Award-Winning Agency</h1>
                                    <div className='title2'> <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed</p>
                                        <p>condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt</p><p>metus. Morbi sed tortor a risus luctus dignissim.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-4 g-4'>
                            <Col md={3}>
                                <div className='award_item'>
                                    <i><IoAlarmOutline></IoAlarmOutline></i>
                                    <h3>150</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='award_item'>
                                    <i><IoEarthOutline></IoEarthOutline></i>
                                    <h3>130</h3>
                                    <p>Projects completed</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='award_item'>
                                    <i><IoMdCheckboxOutline></IoMdCheckboxOutline></i>
                                    <h3>99</h3>
                                    <p>Positive Feedback </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='award_item'>
                                    <i><BsFillLightningChargeFill></BsFillLightningChargeFill></i>
                                    <h3>250</h3>
                                    <p>Cups of Coffee</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Award;