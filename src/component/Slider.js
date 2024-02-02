import './../App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from "./../image/slider1.jpeg";
import slider2 from "./../image/slider2.jpeg";


function Slider() {
    return (
      
            <div className='Slider'>
                <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} autoplay={2000}>
                    <div class='item'>
                        <div className='slider_img'>
                            <img src={slider1}></img>
                            <div className='slider_layer'>
                                <h1>We Combine Design </h1>
                                <h1>and Creativity</h1>
                                <div className='p_div'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, </p>
                                    <p> veritatis tempore nostrum idofficia quaerat eum corrupti, </p>
                                    <p> ipsa aliquam velit.</p>
                                </div>
                                <div className='button'><a className='theme_btn' href='#'>EXPLORE US </a></div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='slider_img'>
                            <img src={slider2}></img>
                            <div className='slider_layer'>
                                <h1>Crafting Digital </h1>
                                <h1>Experience</h1>
                                <div className='p_div'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, </p>
                                    <p> veritatis tempore nostrum idofficia quaerat eum corrupti, </p>
                                    <p> ipsa aliquam velit.</p>
                                </div>
                                <div className='button'><a className='theme_btn' href='#'>EXPLORE US </a></div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        
    );
}
export default Slider;