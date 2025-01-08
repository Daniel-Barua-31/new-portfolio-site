import { useEffect, useRef, useState } from "react";
import "./Home.css";

const Home = () => {
  const [inView, setInView] = useState();
  const homeRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting);
    });
    observer.observe(homeRef.current);
  }, []);

  return (
    <div id="hero" className="main-container">
      <div
        ref={homeRef}
        className={`home-container  ${
          inView ? "home-container-transition" : "home-container-hidden"
        }`}
      >
        <p className="text-small">Hi, my name is </p>
        <h1>
          {" "}
          <span className="text-medium-color-white">
            {" "}
            Daniel Barua.
          </span> <br />{" "}
          <span className="text-medium-color-light-gray">
            {" "}
            I build things for web{" "}
          </span>{" "}
        </h1>
        <div className="sub-container">
          <p className="text-small-color-light-gray">
            {" "}
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, intutive webpage for fun.
          </p>
        </div>
        <div>
          <a
            href="/Daniel-Resume.pdf"
            className="btn-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
