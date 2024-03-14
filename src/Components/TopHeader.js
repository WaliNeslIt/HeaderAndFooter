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
      <div class="nav-socials w-dyn-list">
        <div role="list" class="nav-socials-list w-dyn-items">
          <div role="listitem" class="nav-social-item w-dyn-item">
            <a href="/" target="_blank" rel="noopener noreferrer" class="nav-social-link w-inline-block">
              <img loading="lazy" alt="Twitter" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1.png" sizes="(max-width: 991px) 100vw, 1vw" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1.png 512w" class="icon is-nav-social-icon" />
            </a>
          </div>
          <div role="listitem" class="nav-social-item w-dyn-item">
            <a href="/" target="_blank" rel="noopener noreferrer" class="nav-social-link w-inline-block">
              <img loading="lazy" alt="Discord" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548b9dd0e018bffffbf96_3.png" class="icon is-nav-social-icon" />
            </a>
          </div>
          <div role="listitem" class="nav-social-item w-dyn-item">
            <a href="/" target="_blank" rel="noopener noreferrer" class="nav-social-link w-inline-block">
              <img loading="lazy" alt="YouTube" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2.png" sizes="(max-width: 991px) 100vw, 1vw" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2.png 512w" class="icon is-nav-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-space"></div> {/* Right space */}
    </div>
  );
}
export default TopHeader;