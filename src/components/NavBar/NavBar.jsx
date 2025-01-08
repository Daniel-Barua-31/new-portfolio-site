import './NavBar.css'

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";


const NavBar = () => {
    
    const showHandle = ()=>{
        const sideBar = document.querySelector('.side-bar')
        sideBar.style.display = 'flex';
    }

    const hideHandle = ()=>{
        const sideBar = document.querySelector('.side-bar');
        sideBar.style.display = 'none';
    }
    return (
        <nav className='nav-bar-section'>
            <ul className='side-bar'>
                <li onClick={hideHandle}><RxCross2 /></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>

            <ul>
                <li className=''><a href="">Daniel</a></li>
                <li className='hideOnMobile'><a href="">About Me</a></li>
                <li className='hideOnMobile'><a href="">Education</a></li>
                <li className='hideOnMobile'><a href="">Work</a></li>
                <li className='hideOnMobile'><a href="">Contact</a></li>
                <li className='' onClick={showHandle}> <BiMenuAltRight /></li>
            </ul>

        </nav>
    );
};

export default NavBar;