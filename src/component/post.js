import './../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import post1 from "./../image/post1.jpeg";
import post2 from "./../image/post2.jpeg";
import post3 from "./../image/post3.jpeg";

function Post() {
    return (
        <>
            <div className='bgagencycolor'>
                <div className='spacer'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h1 className='title1'>Latest Posts</h1>
                                    <div className='line d-flex justify-content-center'><div></div></div>

                                    <div className='title2'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit</p>
                                        <p>amet, consectetur adipisicing elit. Voluptates, earum.</p></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='g-5 pt-5'>
                            <Col lg={4} md={6}>
                                <div className='post_item'>
                                    <div className='post_img'>
                                        <img src={post1}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>Reasons to Smile</h3>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                        <div className='post_btn'>
                                            <a href='#' className='theme_btn'>READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                            <div className='post_item'>
                                    <div className='post_img'>
                                        <img src={post3}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>A Few Moments</h3>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                        <div className='post_btn'>
                                            <a href='#' className='theme_btn'>READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                            <div className='post_item'>
                                    <div className='post_img'>
                                        <img src={post2}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>Hints for Life</h3>
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                        <div className='post_btn'>
                                            <a href='#' className='theme_btn'>READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default Post;