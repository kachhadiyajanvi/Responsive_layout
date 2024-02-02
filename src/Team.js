import bread from "./image/bread.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Ourteam from "./component/Ourteam";
import Aboutus from "./component/Aboutus";
function Team(){
    return(
        <section>
            <Header></Header>
            <div className="breadcrumb">
                <img src={bread}></img>
                <div className="bread_layer d-flex align-items-center">
                    <div className="container bread_info">
                        <p>Our Team</p>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/team">Team</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <Aboutus></Aboutus>
            <Ourteam></Ourteam>
            <Footer></Footer>
        </section>
    );
}
export default Team;