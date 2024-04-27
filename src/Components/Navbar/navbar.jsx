import "./navbar.css"
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from './footer.png';
import instagram_logo from './logo_instagram.png';
import facebook_logo from './logo_facebook.png';
import linkedin_logo from './logo_linkedin.png';
import menu_open from './menu_open.svg';
import menu_closed from './menu_close.svg';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index); 
    };
    
    return (
    <div id="homes" className='navbar' >
      <img src={Footer} alt="" className='logo' />
      <ul className="nav-menu">
        <li><AnchorLink className="anchor-link" offset={200} href="#home"><p id="homes" className={activeTab === 0 ? 'active-tab' : ''} onClick={() => handleTabClick(0)}>Home</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={90} href="#about"><p id="aboutme" className={activeTab === 1 ? 'active-tab' : ''}onClick={() => handleTabClick(1)}>About Me</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={100} href="#photo"><p id="photos" className={activeTab === 2 ? 'active-tab' : ''}onClick={() => handleTabClick(2)}>Photos / Videos</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={100} href="#portfolio"><p id="portfolios" className={activeTab === 3 ? 'active-tab' : ''}onClick={() => handleTabClick(3)}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={100} href="#contact"><p id="contacts" className={activeTab === 4 ? 'active-tab' : ''}onClick={() => handleTabClick(4)}>Contact</p></AnchorLink></li>
      </ul>
      <div className="social-icons-container">
        <a href="https://www.instagram.com/sanii_ne/" target="_blank" rel="noopener noreferrer">
          <img src={instagram_logo} alt="" className="social-icon instagram" />
        </a>
        <a href="https://www.linkedin.com/in/sean-sanii-nejad/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_logo} alt="" className="social-icon linkedin" />
        </a>
        <a href="https://www.facebook.com/sean.saniinejad/" target="_blank" rel="noopener noreferrer">
          <img src={facebook_logo} alt="" className="social-icon facebook" />
        </a>
      </div>
    </div>
    )
}

export default Navbar