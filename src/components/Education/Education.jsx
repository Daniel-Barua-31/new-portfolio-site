import { useEffect, useState, useRef } from "react";
import Heading from "../Headling/Heading";
import "./Education.css";

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["University", "College", "High School"];

  const content = [
    <>
      <h1> Primary University </h1>{" "}
      <p className="duration"> March 2020 - December 2024 </p>
      <p> Bachelor of Science in Computer Science and Engineering</p>
    </>,
    <>
      <h1> Chattogram Biggan College </h1>{" "}
      <p className="duration"> 2019 </p>
      <p> Higher Secondary Certificate </p>
    </>,
    <>
      <h1> Banderban Goverment School </h1>{" "}
      <p className="duration"> 2017 </p>
      <p> Secondary School Certificate </p>
    </>,
  ];

  const educationRef = useRef();

  const [inView, setInView] = useState();
  console.log( "Education" ,inView);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting);
    });
    observer.observe(educationRef.current);
  }, []);

  return (
    <div ref={educationRef} id="education" className="section-container">
      <Heading titleName="Education" />
      <div className={`education-container  ${inView ? "transition-education" : "hidden-education"}`} >
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab == index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="line"> </div>
              {tab}
            </div>
          ))}
        </div>
        <div className="content">
          <div className="education-content-item">{content[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
