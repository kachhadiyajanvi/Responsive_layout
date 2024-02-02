import { Container,Row,Col } from "react-bootstrap";
import "./../App.css";
import team1 from "./../image/team1.jpeg";
import team2 from "./../image/team2.jpeg";
import team3 from "./../image/team3.jpeg";
import { FaFacebookF,FaTwitter,FaGoogle   } from "react-icons/fa6";
import { AiFillDribbbleCircle } from "react-icons/ai";


function Ourteam() {
    return (
        <>
            <div className="our_team">
                <div className="spacer">
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>Our Team</h1>
                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi</p>
                                        <p>tempora obcaecati, quis similique quos.</p></div>
                                    <div className='line d-flex justify-content-center'><div></div></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="g-5">
                            <Col md={4}>
                                <div className="team_item">
                                    <div className="team_img">
                                        <img src={team1}></img>
                                        <div className="teamimg_layer d-flex align-items-center justify-content-center">
                                            <ul className="d-flex justify-content-center team_menu">
                                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                                <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                                <li><a href="#"><FaGoogle ></FaGoogle ></a></li>
                                                <li><a href="#"><AiFillDribbbleCircle></AiFillDribbbleCircle></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_info text-center">
                                        <h4>Michael Jonson</h4>
                                        <font>Head Of Marketing</font>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className="team_item">
                                    <div className="team_img">
                                        <img src={team2}></img>
                                        <div className="teamimg_layer d-flex align-items-center justify-content-center">
                                            <ul className="d-flex justify-content-center team_menu">
                                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                                <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                                <li><a href="#"><FaGoogle ></FaGoogle ></a></li>
                                                <li><a href="#"><AiFillDribbbleCircle></AiFillDribbbleCircle></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_info text-center">
                                        <h4>Carrick Mollenkamp</h4>
                                        <font>Web Developer</font>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className="team_item">
                                    <div className="team_img">
                                        <img src={team3}></img>
                                        <div className="teamimg_layer d-flex align-items-center justify-content-center">
                                            <ul className="d-flex justify-content-center team_menu">
                                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                                <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                                <li><a href="#"><FaGoogle ></FaGoogle ></a></li>
                                                <li><a href="#"><AiFillDribbbleCircle></AiFillDribbbleCircle></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team_info text-center">
                                        <h4>David Gauthier</h4>
                                        <font>Head Of Management</font>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Ourteam;