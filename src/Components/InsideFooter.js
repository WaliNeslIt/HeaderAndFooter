import React from 'react';
import '../Styles/InsideFooter.css';


function InsideFooter() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <a href="#" style={{ marginLeft: 5}} class="btn"><i className="fab fa-twitter"></i></a>
        <a href="#" style={{ marginLeft: 5}} class="btn"><i className="fab fa-discord"></i></a>
        <a href="#" style={{ marginLeft: 5}} class="btn"><i className="fab fa-youtube"></i></a>
        <span className='btn' style={{ width: 300, marginLeft: 20}}>Get In Touch<span className="arrow">&#9658;</span></span>
        <br></br>
        <br></br>

        <div className='btnX'style={{ width: 511 }}>
          <input style={{ width: 255, backgroundColor: 'black', color: 'white' }} type="text" placeholder='Your Email'/>
          <span style={{ marginLeft: 15, backgroundColor: 'grey' }} className='btn'>SUBSCRIBE</span>
        </div>
      </div>
    );
}

export default InsideFooter;
