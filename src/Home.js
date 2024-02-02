import Agency from "./component/Agency";
import Award from "./component/Award";
import Create from "./component/Create";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Offer from "./component/Offer";
import Slider from "./component/Slider";
import Testimonial from "./component/Testimonial";
import Post from "./component/post";


function Home(){
    return(
        <section>
            <Header></Header>
            <Slider></Slider>
            <Offer></Offer>
            <Agency></Agency>
            <Create></Create>
            <Award></Award>
            <Testimonial></Testimonial>
            <Post></Post>
            <Footer></Footer>
        </section>
    );
}
export default Home;