import "./../App.css";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sponser1 from "./../image/sponser1.png";
import sponser2 from "./../image/sponser2.png";
import sponser3 from "./../image/sponser3.png";
import sponser4 from "./../image/sponser4.png";


function Sponser() {
    const option = {
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5
          }
        }
      }
    return (
        <>
            <Container>
                <OwlCarousel className='owl-theme' loop margin={10} dots={false} autoplay={true} autoplayTimeout={2000} {...option}>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser1}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser2}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser3}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser4}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser1}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser2}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser3}></img>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="sponser_img">
                            <img src={sponser4}></img>
                        </div>
                    </div>

                </OwlCarousel>
            </Container>
        </>
    )
}
export default Sponser;