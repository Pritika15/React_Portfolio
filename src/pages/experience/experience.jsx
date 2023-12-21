import './Page.css';
import img from '../../assets/social media icons/skill-icons_twitter.svg';
import twitter from '../../assets/social media icons/skill-icons_twitter.svg';
import linkedin from '../../assets/social media icons/mdi_linkedin.svg';
import instagram from '../../assets/social media icons/skill-icons_instagram.svg';
import github from '../../assets/social media icons/jam_github.svg';
import gmail from '../../assets/social media icons/logos_google-gmail.svg';
import nama from './assets/experiences/image 9.png';
import habeto from './assets/experiences/image 8.png';
import jp from './assets/experiences/image 10.png';
import rozjar from './assets/projects/Group 66.png';
import spinger from './assets/research/image 3.png';
import sih1 from './assets/achievement/sih/Rectangle 20.png';
import sih2 from './assets/achievement/sih/Rectangle 21.png';
import uia1 from './assets/achievement/uia/Rectangle 20.png';
import uia2 from './assets/achievement/uia/Rectangle 21.png';
import {useEffect, useState} from "react";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import {Information_container} from "../../common_components/information_container";
import {Python} from "../../common_components/language_icon_loader";

export const Page = () => {
    function launchInfo(type, tags, gallery, projectHeading, projectContent, footer) {
        return <Information_container props={{
            type: type, tags: tags,
            gallery: gallery,
            projectHeading: projectHeading,
            projectContent: projectContent,
            footer: footer
        }}/>
    }

    const i = 0;
    const [projectMoreBtn, setProjectModeBtn] = useState(false);
    const [infoCard, setInfoCard] = useState();
    useEffect(() => {
        new Swiper('.project_swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            createElements: true,
            preventClicks: false,
            allowSlidePrev: false,
            navigation: false,
            allowTouchMove: false,
            touchStartPreventDefault: false,
            watchSlidesProgress: false,
            preventClicksPropagation: false,
            cssMode: true,
            spaceBetween: 20,
            effect: "flip",
            pagination: {
                el: ".swiper-pagination",
            },
            modules: [Pagination]
        });
    }, )
    let experiences = [
        {
            profile_icon: habeto,
            profile_heading: "Accenture",
            profile_sub_heading: 'https://www.accenture.com/in-en',
            experience_name: "Advanced Application (AEH) Intern",
            experience_description: "Gained hands-on experience in building applications from scratch using Pega Systems.  Demonstrated expertise in understanding user needs, formulating work life cycle and data models. Exhibited adeptness in integrating applications with external systems while ensuring adherence to security requirements.",
            place_and_time: "Remote | June 2023 to July 2023"
        },
    ]

    let profile_icons = [{
        "icon": linkedin, link: 'https://www.linkedin.com/in/pritika-sharma-a53518211/'
    }, {
        "icon": twitter, link: 'https://twitter.com/Pritika63790947?t=rBX6fOt32tJ4r0iyvKuJow&s=08'
    }, {
        "icon": instagram, link: 'https://www.instagram.com/pritikaaaaaaa_/'
    }, {
        "icon": github, link: 'https://github.com/Pritika15'
    }, {
        "icon": gmail, link: 'mailto: sharmapritika131@gmail.com'
    }]


    let projects = [
        {
            project_name: "FinEase AI powered Personalized Financial Advisor",
            project_description: "A financial advisor who provides guidance and advice on financial matters to individuals or organizations and helps people make informed decisions about their money, investments, and overall financial well-being.Financial Planning, Investment Advice,Risk Management and Tax Planning are the  few key roles and responsibilities of the financial advisor.",
            // project_img: rozjar,
            active: true,
            project_link: "https://github.com/Pritika15/FinEase-BlacRock_Hack",
            expand: {
                type: "project", tags: [{
                    name: "",
                    icon: <Python/>,
                    link: ""
                }],
                gallery: [],
                projectHeading: {
                    heading: "",
                    link: ""
                },
                projectContent: [],
                footer: ""
            }
        }, {
            project_name: "Sentiment Analysis of Tweets associated with Turkey-Syria Earthquakes 2023",
            project_description: "Sentiment analysis and Emotion Detection of the Turkey-Syria Earthquakes 2023 which reveals the prevailing emotions and attitudes of people impacted by the disaster.",
            active: true,
            project_link: "https://github.com/Pritika15/Turkey_Syria-Research-Project-"
        }, {
            project_name: "Contextual Analysis of Current World Affairs",
            project_description: "Contextual Analysis of Current World Affairs which includes Topic modeling , Sentiment Analysis and Emotion Tone Detection",
            active: true,
            project_link: "https://github.com/"
        },
    ]
    let research = [
        {
            reseach_title: "Sentiment Analysis of Tweets associated with Turkey-Syria Earthquakes 2023",
            description: " The paper has earned a spot among the top 15% of submissions as a contribution to the scientific community in 3rd International Conference on Computing and Communication Networks (ICCCNet) 2023, United Kingdom.The research delves into the realm of sentiment analysis and emotions associated with the Turkey-Syria earthquakes of 2023, leveraging insights drawn from tweets sourced from Twitter. This exploration aims to deepen our understanding of the human experience during such incidents, offering valuable perspectives, responses, and mitigation.",
            img: spinger,
           
            link: ""
        }
    ]
    let achievements = [{
        imgs: ["https://www.encompasscorporation.com/wp-content/uploads/2019/12/Company-news_Pega-systems_featured.png"],
        title: "CSA certified Pega Architect",
        description: "The Certified Pega System Architect version 8.6 certification is for developers and technical staff members who want to learn how to develop Pega applications. This certification is the first level in the System Architect certification path and provides a baseline measurement on your knowledge of Pega applications. The PCSA Version 8.6 exam includes scenario questions, multiple choice questions and drag/drop items.",
        link: ""
     }
   
    ]

    //About Section
    let about = [{
        title: 'University',
        value: 'Thapar Institute of engineering and technology',
    }, {
        title: 'Course',
        value: 'Bachelor of Engineering',
    }, {
        title: 'Majors',
        value: 'Natural Language Processing (NLP), Rapids (NVIDIA), Deep Learning and Machine Learning',
    },]

    //Skill Section 
    let skills = [{
        'title': 'Programming\n' +
            'Languages',
        'value': 'C,C++,Python,Javascript,R',
    }, {
        'title': 'Frameworks/\nTechnologies',
        'value': 'ExpressJs, ReactJs, NodeJs, SQL, Deep-Learning, Machine-learning, Natural Language Processing NLP, Django\n',
    }, {
        'title': 'Non-Technical Skills',
        'value': 'National level debater, MUN Delegate, Poet, Content Writer , Creator, Problem-solving, Management, Leadership skills, Writing skills, Interpersonal and Analytical skills, Teamwork, Adaptability, Time management',
    },]

    return <>
        <div className="page" id={"experience"}>
            <div className="col_1">
                <div className="experience_container">
                    {
                        experiences.map((d, index) => <div key={index} className="experience_card">
                                <div className="top_container">
                                    <img src={d.profile_icon} alt=""/>
                                    <div className="heading_container">
                                        <div className="main_heading">
                                            {d.profile_heading}
                                        </div>
                                        <div className="sub_heading">
                                            <a href={d.profile_sub_heading}>
                                                {d.profile_sub_heading}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_heading">
                                    {d.experience_name}
                                </div>
                                <div className="card_content">{d.experience_description}
                                </div>
                                <div className="time_container">
                                    {d.place_and_time}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="projects" id={"projects"}>
                    <div className="heading_container">
                        <div className="heading">
                            Projects
                        </div>
                        <div className="sub_heading">
                            showing Result for project
                        </div>
                    </div>
                    <div className={"project_swiper"}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="project_container">
                                    <div className="project1" onClick={() => {
                                        setInfoCard(launchInfo())
                                    }
                                    }>
                                        <figure>
                                            <img src={projects[i].project_img} alt=""/>
                                        </figure>
                                        <div className="project_heading">
                                            {projects[i].project_name}
                                        </div>
                                        <div className="project_description">
                                            {projects[i].project_description}
                                        </div>
                                    </div>
                                    <div className="project2">
                                        <div className="project_heading">
                                            {projects[i + 1].project_name}

                                        </div>
                                        <div className="project_description">
                                            {projects[i + 1].project_description}
                                        </div>
                                    </div>
                                    <div className="project3">
                                        <div className="project_heading">
                                            {projects[i + 2].project_name}
                                        </div>
                                        <div className="project_description">{projects[i + 2].project_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="project_container">
                                    <div className="project1" onClick={() => {
                                        setInfoCard(launchInfo())
                                    }
                                    }>
                                        <figure>
                                            <img src={projects[i].project_img} alt=""/>
                                        </figure>
                                        <div className="project_heading">
                                            {projects[i].project_name}
                                        </div>
                                        <div className="project_description">
                                            {projects[i].project_description}
                                        </div>
                                    </div>
                                    <div className="project2">
                                        <div className="project_heading">
                                            {projects[i + 1].project_name}

                                        </div>
                                        <div className="project_description">
                                            {projects[i + 1].project_description}
                                        </div>
                                    </div>
                                    <div className="project3">
                                        <div className="project_heading">
                                            {projects[i + 2].project_name}
                                        </div>
                                        <div className="project_description">{projects[i + 2].project_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            projectMoreBtn ? <div>
                                    <div className="swiper-pagination"/>
                                </div>
                                : <div className="more" onClick={() => setProjectModeBtn(true)}>
                                    <div className={'more_line'}/>
                                    <div className="more_button">
                                        View More
                                    </div>
                                </div>
                        }

                    </div>
                </div>
                <div className="research_works" id={"research"}>
                    <div className="heading_container">
                        <div className="heading">
                            Research Works
                        </div>
                        <div className="sub_heading">
                            Showing Results for Research works
                        </div>
                    </div>
                    {research.map((v, index) => <div key={index} className="experience_card">
                        <div className="card_heading">
                            {v.reseach_title}
                        </div>
                        <div className="card_content">
                            <div className={"card_left"}>{v.description}
                            </div>
                            <div className={'card_right'}>
                                <figure>
                                    <img src={v.img} alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="time_container">

                            {
                                v.place
                            }                        </div>
                    </div>)}
                </div>
                <div className="achievement">
                    <div className="heading_container">
                        <div className="heading">
                            Achievement
                        </div>
                        <div className="sub_heading">
                            Showing Results for Achievement
                        </div>
                    </div>
                    {achievements.map((v, index) => {
                        let style = index !== 0 ? {padding: "2rem 0"} : {};
                        return (
                            <div key={index} className="achievement_container" style={style}>
                                <div className="achievement_images">
                                    {v.imgs.map((d, index) => <figure key={index}>
                                        <img src={d} alt=""/>
                                    </figure>)}
                                </div>
                                <div className="achievement_heading">
                                    {v.title}                                </div>
                                <div className="achievement_description">{v.description}</div>
                                <div className="achievement_sub_heading">
                                    {
                                        v.place
                                    }                                </div>
                            </div>)
                    })}
                    <div className="more">
                        <div className={'more_line'}/>
                        <div className="more_button">
                            View More
                        </div>
                    </div>

                </div>

            </div>

            <div className="col_2">
                <div className="aboutus">
                    <div className="heading">
                        About
                    </div>
                    <div className="about_container">
                        {
                            about.map((v, index) => <div key={index} className={'row'}>
                        <span className="cell">
                            {v.title} :
                        </span>
                                    <span className="cell cell_value">
                            {v.value}
                        </span>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className="aboutus">
                    <div className="heading">
                        Skills
                    </div>
                    <div className="about_container">
                        {
                            skills.map((v, index) => <div key={index} className={'row'}>
                        <span className="cell_label ">
                           {v.title} :
                        </span>
                                    <span
                                        className="cell cell_value">{v.value}                       </span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="aboutus profile_section">
                    <div className="heading">
                        Profiles
                    </div>
                    <div className="about_container">
                        <div className={'row'}>
                            <div className="profile_logos">
                                {
                                    profile_icons.map((d, index) => <a key={index} href={d.link}>
                                            <figure><img src={d.icon} alt=""/></figure>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {infoCard}
    </>;
}