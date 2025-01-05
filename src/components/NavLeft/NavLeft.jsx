import { RiGithubLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import "./NavLeft.css";

const links = (
  <>
    <li>
      <a href="https://github.com/Daniel-Barua-31">
        {" "}
        <RiGithubLine className="icon" />{" "}
      </a>
    </li>
    <li>
      <a href="https://x.com/DanielBarua7">
        {" "}
        <FaXTwitter className="icon" />{" "}
      </a>
    </li>
    <li>
      <a
        href="www.linkedin.com/in/daniel-barua-bd"
      >
        {" "}
        <SlSocialLinkedin className="icon" />{" "}
      </a>
    </li>
  </>
);

const NavLeft = () => {
  return (
    <div className="nav-bar-left-section">
      <ul className="social-list">{links}</ul>
    </div>
  );
};

export default NavLeft;
