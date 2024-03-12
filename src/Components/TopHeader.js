import React from 'react';
import '../Styles/TopHeaderStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function TopHeader() {
  return (
    <div className="flex-container">
      <div className="flex-space"></div> {/* Left space */}
      <div className="email">gm@nome.gallery</div> {/* Email */}
      <div className="flex-space"></div> {/* Right space */}
      <div className="center-content">ORDINALS GALLERY</div> {/* Center content */}
      <div className="flex-space"></div> {/* Left space */}
      <div className="icons">
        {/* Icons */}
        <i className="fab fa-twitter"></i>
        <i className="fab fa-discord"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="flex-space"></div> {/* Right space */}
    </div>
  );
}

export default TopHeader;
