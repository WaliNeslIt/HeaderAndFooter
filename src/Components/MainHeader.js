import React from 'react';
import '../Styles/MainHeaderStyle.css';
function MainHeader() {
  return (
    <div class="nav-main">
      <div className="button-for-open-menu">
        <div className="menu-burger-icon">
          <div className="menu-burger-line is-1st"></div>
          <div className="menu-burger-line is-2nd"></div>
          <div className="menu-burger-line is-3rd"></div>
        </div>
        <div className="menu-button-text">Menu</div>
      </div>
      <nav role="navigation" className="nav-main-links-wrapper w-nav-menu">
        <a href="/" className="nav-main-link">About</a>
        <a href="/" className="nav-main-link">1/1 ART</a>
        <a href="/" className="nav-main-link w-inline-block">
          <div>EDITONS</div>
        </a>
        <a href="/" className="nav-main-link w-inline-block">
          <div>LEADER-BOARD</div>
        </a>
        <a href="/" className="nav-main-link">RUNES</a>
        <a href="/" className="nav-main-link">STUDIO</a>
      </nav>
      <div className="nav-secondary-links-wrapper">
        <div data-w-id="0e49b745-aa8a-58d4-10dd-dcf55e01c65c" className="nav-search-button">
          <img src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e51e86094585887db14dbc_65e510d1b7dd2368cc442647_search-fill0-wght400-grad0-opsz24.png" loading="lazy" sizes="(max-width: 767px) 16.5px, (max-width: 991px) 2vw, 1vw" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e51e86094585887db14dbc_65e510d1b7dd2368cc442647_search-fill0-wght400-grad0-opsz24-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e51e86094585887db14dbc_65e510d1b7dd2368cc442647_search-fill0-wght400-grad0-opsz24-p-800.png 800w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e51e86094585887db14dbc_65e510d1b7dd2368cc442647_search-fill0-wght400-grad0-opsz24-p-1080.png 1080w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e51e86094585887db14dbc_65e510d1b7dd2368cc442647_search-fill0-wght400-grad0-opsz24.png 1200w" alt="" className="nav-button-icon" />
        </div>
        <a href="/" className="nav-contact-button">CONNECT WALLET</a>
      </div>
    </div>
  );
}
export default MainHeader;