import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Page404(){
    return(
        <section>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <div className='page_404 spacer'>
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <p>Sorry, but the page you were trying to view does not exist.</p>
                            <Link to="/" className='theme_btn'>GO HOME</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </section>
    );
}
export default Page404;