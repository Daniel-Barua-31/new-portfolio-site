import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

  const [scrollValue, setScrollValue] = useState(0);
  const [upScroll, setupScroll] = useState(false);
  const handleScrollValue = () => {
    const currentScrollY = window.scrollY;
    currentScrollY < scrollValue ? setupScroll(true) : setupScroll(false);
    setScrollValue(currentScrollY);
  };
  window.addEventListener("scroll", handleScrollValue);

  const showNavBar = () => {
    const show = document.querySelector(".sidebar");
    show.style.display = "flex";
  };

  const hideNavBar = () => {
    const hide = document.querySelector(".sidebar");
    hide.style.display = "none";
  };

  return (
    <div>
      <nav>
        <div>
          <ul className="sidebar">
            <li  onClick={hideNavBar}>
              <RxCross2 />
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                <div className="nav-option">
                  <span className="number"> 01 </span>{" "}
                  <span className="text-nav"> About Me</span>
                </div>
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
                <div className="nav-option">
                  <span className="number"> 02 </span>{" "}
                  <span className="text-nav"> Education</span>
                </div>
              </Link>{" "}
            </li>
            <li>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <div className="nav-option">
                  <span className="number"> 03 </span>{" "}
                  <span className="text-nav"> Work</span>{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <div className="nav-option">
                  <span className="number"> 04 </span>{" "}
                  <span className="text-nav"> Contact</span>{" "}
                </div>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <nav className={`header-container ${upScroll ? "visible" : ""}`}>
        <div className="logo-alike">
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
            Daniel
          </Link>
        </div>
        <div className="nav-list">
          <ul>
            <li className="hideOnMobile">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                <span className="number"> 01 </span>{" "}
                <span className="text-nav"> About Me</span>
              </Link>
            </li>
            <li className="hideOnMobile">
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
            <li className="hideOnMobile">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <span className="number"> 03 </span>{" "}
                <span className="text-nav"> Work</span>{" "}
              </Link>
            </li>
            <li className="hideOnMobile">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <span className="number"> 04 </span>{" "}
                <span className="text-nav"> Contact</span>{" "}
              </Link>{" "}
            </li>
            <li className="seenOnMobile" onClick={showNavBar}>
              <BiMenuAltRight />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
