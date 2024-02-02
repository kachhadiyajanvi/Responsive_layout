import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="sticky">
            <Navbar expand="lg" className="bgcolor">
                <Container>
                    <Navbar.Brand href="#home"><img src={require('./../image/logo1.png')}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href=""><Link to="/">HOMEPAGE</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/about">ABOUT US</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/service">SERVICE</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/page404">PORTFOLIO</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/team">TEAM</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/page404">PRICING</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/contact">CONTACT</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/blog">BLOG</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;