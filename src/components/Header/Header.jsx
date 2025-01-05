import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const link = (
    <>
      <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          {" "}
          <span className="number"> 01 </span>{" "}
          <span className="text-nav"> About Me</span>
        </Link>
      </li>
      <li>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className="number"> 02 </span>{" "}
          <span className="text-nav"> Education</span>
        </Link>{" "}
      </li>
      <li>
        <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
          <span className="number"> 03 </span>{" "}
          <span className="text-nav"> Work</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <span className="number"> 04 </span>{" "}
          <span className="text-nav"> Contact</span>{" "}
        </Link>{" "}
      </li>
    </>
  );

  const [scrollValue, setScrollValue] = useState(0);
  const [upScroll, setupScroll] = useState(false);
  const handleScrollValue = ()=>{
    const currentScrollY = window.scrollY;
    currentScrollY < scrollValue ? setupScroll(true)  : setupScroll(false);
    setScrollValue(currentScrollY);

  }
  window.addEventListener("scroll", handleScrollValue)
  return (
    
      <div  className={`header-container ${upScroll ? "visible" : "" }` }>
        <div className="logo-alike">Daniel</div>
        <div className="nav-list">
          <ul>{link}</ul>
        </div>
      </div>
  );
};

export default Header;
