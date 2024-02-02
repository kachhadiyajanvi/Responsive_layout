import "./../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import design1 from "./../image/design1.jpeg";
import design2 from "./../image/design2.jpeg";
import design3 from "./../image/design3.jpeg";


function Designs() {
    return (
        <>
            <div className="Design spacer">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="design_info">
                                <h1>We Create Designs</h1>
                                <h1>and technology</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="design_img">
                                <img src={design1}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="design2">
                <div className="spacer">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="design_info">
                                    <h2>Our Mission</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
                                    <div className="design_img mt-5">
                                        <img src={design2}></img>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="design_info">
                                    <h2>Our Vision</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
                                    <div className="design_img mt-5">
                                        <img src={design3}></img>
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

export default Designs;