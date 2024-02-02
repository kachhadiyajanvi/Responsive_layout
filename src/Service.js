import Header from "./component/Header";
import "./App.css";
import bread from "./image/bread.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Ourservice from "./component/Ourservice";
import Footer from "./component/Footer";
import Testimonial from "./component/Testimonial";
import Award from "./component/Award";
import Ourskill from "./component/Ourskill";
import Sponser from "./component/sponser";

function Service(){
    return(
        <section>
            <Header></Header>
            <div className="breadcrumb">
                <img src={bread}></img>
                <div className="bread_layer d-flex align-items-center">
                    <div className="container bread_info">
                        <p>Our Service</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/service">Service</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <Ourservice></Ourservice>
            <Ourskill></Ourskill>
            <Sponser></Sponser>
            <Award></Award>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </section>
    );
}
export default Service;