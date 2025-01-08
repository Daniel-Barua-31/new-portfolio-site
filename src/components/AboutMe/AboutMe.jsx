
import './AboutMe.css';
import Heading from '../Headling/Heading';
// import profilepic from '../../assets/images/profilepic.webp'
import { useEffect, useRef, useState } from 'react';


const AboutMe = () => {

    const skillList = (
        <>
            <li> Javascript (Es6+) </li>
            <li> React </li> 
            <li> Node JS</li>
            <li> Typescript</li>
            <li> Tailwind </li>
            <li> Flutter </li>       
        </>
    );
    const scrollRef = useRef();
    const [inView, setInView] = useState();
    console.log("About",inView);
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0];
            setInView(entry.isIntersecting);
        })
        observer.observe(scrollRef.current)
    },[]);

    return (
        <div id="about" className="about-me-section" ref={scrollRef} >
                <div className={`about-me-container ${inView ? "animate-scroll" : "hidden" }`}>
                    <div className='written-container'>
                        <Heading titleName="About Me" />
                        <p className='about-me-container-paragraph'>
                            Hello! My name is Daniel and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        
                        <p className='about-me-container-paragraph'>
                            I have recently worked with Flutter to create an Android application based on Zakat calculation.
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className='tech-list'>
                            <ul>
                                {skillList}
                            </ul>
                        </div>
                        
                    </div>

                    <div className='wrapper pic-container'>
                        <img src="https://i.ibb.co.com/NFXF9QC/profilepic.webp" alt="image" />
                    </div>
                    
                </div>               
        </div>
    );
};

export default AboutMe;