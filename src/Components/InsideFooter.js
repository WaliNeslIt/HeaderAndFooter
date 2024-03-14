import React from 'react';
import '../Styles/InsideFooter.css';
function InsideFooter() {
    return (
      <div className='footer-call-to-action-block' style={{ backgroundColor: 'black' }}>
        <div className='footer-call-to-action-block'>
          <div className='footer-socials w-dyn-list'>
          <div class="footer-socials w-dyn-list">
            <div role="list" class="footer-socials-list w-dyn-items">
              <div role="listitem" class="footer-social-item w-dyn-item">
                <a href="/" target="_blank" rel="noopener noreferrer" class="footer-social-link-block w-inline-block">
                  <img loading="lazy" alt="Twitter" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1.png" sizes="(max-width: 479px) 6vw, (max-width: 991px) 22px, (max-width: 1439px) 2vw, (max-width: 1919px) 22px, 1vw" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e5486a37f1fa6bedeb4016_1.png 512w" class="icon is-footer-social-icon" />
                </a>
              </div>
              <div role="listitem" class="footer-social-item w-dyn-item">
                <a href="/" target="_blank" rel="noopener noreferrer" class="footer-social-link-block w-inline-block">
                  <img loading="lazy" alt="Discord" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548b9dd0e018bffffbf96_3.png" class="icon is-footer-social-icon" />
                </a>
              </div>
              <div role="listitem" class="footer-social-item w-dyn-item">
                <a href="/" target="_blank" rel="noopener noreferrer" class="footer-social-link-block w-inline-block">
                  <img loading="lazy" alt="YouTube" src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2.png" sizes="(max-width: 479px) 6vw, (max-width: 991px) 22px, (max-width: 1439px) 2vw, (max-width: 1919px) 22px, 1vw" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425e9/65e548e037f1fa6bedeb7493_2.png 512w" class="icon is-footer-social-icon" />
                </a>
              </div>
            </div>
          </div>
          </div>
          <a href="/" class="footer-call-to-action-button w-inline-block">
            <div class="footer-button-image"></div>
            <div class="footer-button-content">
              <p class="footer-button-text">Get in touch</p>
            </div>
            <div class="footer-button-icon">
              <img src="https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e5231565febd941c5a2200_1.png" loading="lazy" sizes="(max-width: 479px) 17.8125px, (max-width: 991px) 28.8125px, (max-width: 1919px) 2vw, 34.40625px" srcset="https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e5231565febd941c5a2200_1-p-500.png 500w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e5231565febd941c5a2200_1-p-800.png 800w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e5231565febd941c5a2200_1-p-1080.png 1080w, https://assets-global.website-files.com/65e510d1b7dd2368cc4425a0/65e5231565febd941c5a2200_1.png 1200w" alt="" class="icon is-medium"/>
            </div>
          </a>
        </div>
        <div class="footer-newsletter">
        <div class="newsletter-block w-form">
          <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" data-name="Newsletter Form" method="get" class="newsletter-form" data-wf-page-id="65e510d1b7dd2368cc4425e0" data-wf-element-id="d6512c8f-0c04-ba71-cb06-87e8d92e73c4" aria-label="Newsletter Form">
            <input class="text-field is-newsletter w-input" maxlength="256" name="Email" data-name="Email" placeholder="Your email" type="email" id="Newsletter-sEmail" required=""/>
            <input type="submit" data-wait="Please wait..." class="newsletter-submit-button w-button" value="Subscribe " />
          </form>
        </div>
      </div>
      </div>
    );
}
export default InsideFooter;