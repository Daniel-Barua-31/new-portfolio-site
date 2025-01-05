import AboutMe from "../AboutMe/AboutMe";

import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import FeatureWorks from "../FeatureWorks/FeatureWorks";
import Header from "../Header/Header";

import Home from "../Home/Home";
import NavLeft from "../NavLeft/NavLeft";
import NavRight from "../NavRight/NavRight"
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header />
            <NavLeft />
            <NavRight />
            <Home /> 
            <AboutMe /> 
            <Education />
            <FeatureWorks />
            <ContactMe />
        </div>
    );
};

export default Root;