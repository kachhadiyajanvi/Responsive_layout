import Footer from "./component/Footer";
import Header from "./component/Header";
import "./App.css";
import bread from "./image/bread.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Designs from "./component/Designs";
import Promo from "./component/Promo ";
import { Container } from "react-bootstrap";
import Gallary from "./component/Gallery";
import Ourteam from "./component/Ourteam";
import Award from "./component/Award";
import Create from "./component/Create";

function About(){
    return(
        <section>
            <Header></Header>
            <div className="breadcrumb">
                <img src={bread}></img>
                <div className="bread_layer d-flex align-items-center">
                    <div className="container bread_info">
                        <p>About Us</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/about">About Us</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <Designs></Designs>
            <Promo></Promo>
            <div className="bgback d-flex justify-content-center align-items-center">
                <Container>
                <div className="spacer bgback_info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</p>
                </div>
                </Container>
            </div>
            <Gallary></Gallary>
            <Ourteam></Ourteam>
            <Award></Award>
            <Create></Create>
            <Footer></Footer>
        </section>
    );
}
export default About;