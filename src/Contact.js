import bread from "./image/bread.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Touch from "./component/Touch";
function Contact(){
    return(
        <section>
            <Header></Header>
            <div className="breadcrumb">
                <img src={bread}></img>
                <div className="bread_layer d-flex align-items-center">
                    <div className="container bread_info">
                        <p>Contact Us</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/contact">Contact Us</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <Touch></Touch>
            <Footer></Footer>
        </section>
    );
}
export default Contact;