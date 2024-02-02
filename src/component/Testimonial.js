import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IoChatbubblesSharp } from "react-icons/io5";
import testi1 from './../image/testi1.jpeg';
import testi2 from './../image/testi2.jpeg';
import testi3 from './../image/testi3.jpeg';
import './../App.css';

function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <div className="spacer">
                    <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} >
                        <div class='item'>
                            <div className='testi'>
                                <i><IoChatbubblesSharp></IoChatbubblesSharp></i>
                                <div className='testi_p'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde</p><p> corporis labore, enim, voluptatum  officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p>Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                                </div>
                                <div className=' d-flex justify-content-center'>
                                    <div className='testi_img'><img src={testi2}></img></div>
                                </div>
                                <div className='testi_info'>
                                    <h3>Emma Harrison</h3>
                                    <p>CEO, Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                        <div className='testi'>
                                <i><IoChatbubblesSharp></IoChatbubblesSharp></i>
                                <div className='testi_p'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde</p><p> corporis labore, enim, voluptatum  officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p>Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                                </div>
                                <div className=' d-flex justify-content-center'>
                                    <div className='testi_img'><img src={testi1}></img></div>
                                </div>
                                <div className='testi_info'>
                                    <h3>Alexander Lucas</h3>
                                    <p>CEO, Company Name</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                        <div className='testi'>
                                <i><IoChatbubblesSharp></IoChatbubblesSharp></i>
                                <div className='testi_p'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde</p><p> corporis labore, enim, voluptatum  officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p>Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                                </div>
                                <div className=' d-flex justify-content-center'>
                                    <div className='testi_img'><img src={testi3}></img></div>
                                </div>
                                <div className='testi_info'>
                                    <h3>William Martin</h3>
                                    <p>CEO, Company Name</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default Testimonial;