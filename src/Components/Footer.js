import React from 'react';
import '../Styles/Footer.css';
import InsideFooter from '../Components/InsideFooter'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-layout'>
                <div className='footer-row'>
                <div className='footer-column-1'>
                    <div className='footer-contact-links'>
                        <a href="/" class="footer-contact-link-text">gm@nome.art</a>
                    </div>
                    <div  className="footer-main-links">
                        <a href="/" aria-current="page" class="footer-link-text w--current">Home</a>
                        <a href="/" class="footer-link-text">1/1 ART</a>
                        <a href="/" class="footer-link-text">LEADER-BOARD</a>
                        <a href="/" class="footer-link-text">ABOUT</a>
                        <a href="/" class="footer-link-text">EDITIONS</a>
                        <a href="/" class="footer-link-text">RUNES</a>
                    </div>
                    <div className='rom'>
                        <InsideFooter/>
                    </div>
                    <div class="subfooter-links is-left">
                        <a href="/" class="subfooter-link">PRIVACY POLICY</a>
                        <a href="/" class="subfooter-link">TERMS OF SERVICE</a>
                    </div>
                </div>
                <div className='footer-column-2'></div>
                </div>
            </div>
      </div>
    );
}
export default Footer;