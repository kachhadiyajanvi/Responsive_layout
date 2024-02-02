import Footer from "./component/Footer";
import Header from "./component/Header";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bread from "./image/bread.jpeg";
import { Link } from "react-router-dom";
import post1 from "./image/post1.jpeg";
import post2 from "./image/post2.jpeg";
import post3 from "./image/post3.jpeg";
import post4 from "./image/post4.jpg";
import post5 from "./image/post5.jpg";
import post6 from "./image/post6.jpg";


function Blog(){
    return(
        <section>
            <Header></Header>
            <div className="breadcrumb">
                <img src={bread}></img>
                <div className="bread_layer d-flex align-items-center">
                    <div className="container bread_info">
                        <p>Blog</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/blog">Blog</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bgagencycolor'>
                <div className='spacer'>
                    <Container>
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
                            <Col lg={4} md={6}>
                            <div className='post_item'>
                                    <div className='post_img'>
                                        <img src={post4}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>Looking Back</h3>
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
                                        <img src={post5}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>Laugh and Cry</h3>
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
                                        <img src={post6}></img>
                                    </div>
                                    <div className='post_info'>
                                        <h3>Regret No More</h3>
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
            <Footer></Footer>
        </section>
    );
}
export default Blog;