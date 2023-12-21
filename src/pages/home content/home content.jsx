import '../home content/homecontent.css'
import img1 from '../home content/Assets/images/Rectangle.jpeg';
import img2 from '../home content/Assets/images/Rectangle 55.png';
import img3 from '../home content/Assets/images/Rectangle 4.jpeg';
import img4 from '../home content/Assets/images/Rectangle111.png';

import {Page} from "../experience/experience";

import {useEffect} from "react";
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import mobile_img1 from "../home content/Assets/mobile_images/Rectangle.jpeg"
import mobile_img2 from "../home content/Assets/mobile_images/Rectangle 55.png"
import mobile_img3 from "../home content/Assets/mobile_images/Rectangle 4.jpeg"
import mobile_img4 from "../home content/Assets/mobile_images/Rectangle111.png"



export const Overview = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            breakpoints: {
                460: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 3,

                }
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            spaceBetween: 20,

        });

    })
    return (<>
        <div className="home_content ">
            <div className="max_width">
                <div className="search_result_heading">
                    Showing result for Pritika Sharma
                </div>
                <div className="overview_container">
                    <div className="home_bar">
                        <div className="user_heading">
                            <div className="main_heading">
                            Pritika Sharma
                            </div>
                            <div className="sub_heading">
                                Computer Engineer 
                            </div>
                        </div>
                        <ul className="tab_section">
                            <li className="tab tab_active">Overview</li>
                            <li className="tab"><a href="#experience">Experience</a></li>
                            <li className="tab"><a href="#projects">Projects</a></li>
                            <li className="tab"><a href="#research">Research</a></li>
                        </ul>
                    </div>

                    <div className="home_content_container">
                        <div className="mobile_left_container">
                            <swiper-container>
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img className={"inherit"} src={mobile_img1} alt=""/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img className={'inherit'} src={mobile_img2} alt=""/>
                                        </div>
                                        <div className="swiper-slide"><img className={'inherit'} src={mobile_img3}
                                                                           alt=""/>
                                        </div>
                                        <div className="swiper-slide"><img className={'inherit'} src={mobile_img4}
                                                                           alt=""/>
                                        </div>
                                        {/* <div className="swiper-slide"><img className={'inherit'} src={mobile_img7}
                                                                           alt=""/>
                                        </div> */}
                                    </div>
                                </div>
                            </swiper-container>
                        </div>
                        <div className="left_container">
                            <div className="tl1">
                                <figure>
                                    <img className={'inherit'} src={img1} alt=""/>
                                </figure>
                            </div>
                            <div className="tl2">
                                <figure>
                                    <img className={'inherit'} src={img2} alt=""/>
                                </figure>
                            </div>
                            <div className="tl3">
                                <figure>
                                    <img className={'inherit'} src={img3} alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="middle_container">
                            <figure>
                                <img className={"inherit"} src={img4} alt=""/>
                            </figure>
                            <div className="middle_content">
                                {/* <div className={'middle_linkedin_icon'}>
                                    <span className={'center'}><Linkedin_icon/> LinkedIn</span>
                                    <span><Dotted_icon className={"middle_dotted_icon"}/> </span>
                                </div> */}
                                <div className={"m_linkedin_heading"}>
                                    
                                </div>
                                <span className={"m_content"}>  Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? Focus on test-driven environments and problem-solving.
                           </span></div>
                        </div>
                        <div className="right_container">
                            <div className="tr1">
                                <div className="main_heading ">
                                    Age
                                </div>
                                <div className="sub_heading">22 years</div>
                            </div>
                            <div className="tr2">
                                <div className="main_heading ">
                                    Major Project 
                                </div>
                                <div className="sub_heading">Contextual Analysis of Current World Affairs</div>
                            </div>
                            <div className="tr3">
                                <div className="main_heading ">
                                    About
                                </div>
                                <div className="sub_heading">I am a passionate and skilled Pega Developer and Artificial Intelligence enthusiast with a background in C++ programming</div>
                            </div>


                            {/* <div className="tr3">
                                <figure><img src={instagram} alt=""/></figure>
                            </div> */}
                        </div>
                    </div>


                </div>
                <Page/>

            </div>
        </div>
    </>)
}