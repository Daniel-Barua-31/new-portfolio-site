import { useEffect, useRef, useState } from 'react';
import './Works.css';
import { RiGithubLine } from "react-icons/ri";

const Work = ({project}) => {
    const {image, projectName, projectDescription, techs, githubLink} = project
    const refWork = useRef();
    const [inView, setInView] = useState();
    
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setInView(entry.isIntersecting);
        })
        observer.observe(refWork.current);
    })

    
    return (
        <div>
            <div ref={refWork} className="work-container" >
                <div className={`project-image  ${inView ? "work-transition": "work-hidden"}`}>
                   <img src={image} alt={projectName} />
                </div>
                <div className={`project-content  ${inView ? "work-transition" : "work-hidden" }`}  >
                    <h3>   Feature work  </h3>
                    <h1 > {projectName}  </h1>
                    <p className='project-description'> {projectDescription} </p>
                    <ul >
                        {
                            techs.map((tech, index)=> <li key={index} > {tech} </li>)
                        }
                    </ul>
                    <div className='works-icon'>
                        <a href={githubLink}> <RiGithubLine /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Work;