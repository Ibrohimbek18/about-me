import React from 'react';
import './footer.scss'; 
import { Instagram, Telegram, Twiter } from '../../helper/image'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Connect with Us!</h2>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/berdyv784" 
            className="social-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://t.me/Ibrohim_784"  
            className="social-icon telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram" />
          </a>
          <a
            href="https://twitter.com/lubboy" 
            className="social-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twiter} alt="Twiter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
