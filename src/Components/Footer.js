import React from 'react';
import '../Styles/Footer.css';
import InsideFooter from '../Components/InsideFooter'



function Footer() {
    return (
      <div className='flex-container' style={{ backgroundColor: 'black' }}>
        <div className='row'>
            <div className='col'>
                <div className='container' style={{ margin: 50, padding: 50 }}>
                    <h1>gm@nome.art</h1>
                    <br/><br/>
                    <div className='row'>
                        <div className='col'>HOME</div>
                        <div className='col'>1/1 ART</div>
                        <div className='col'>LEADER-BOARD</div>
                    </div>
                    <div className='row'>
                        <div className='col'>ABOUT</div>
                        <div className='col'>EDITIONS</div>
                        <div className='col'>RUNES</div>
                    </div>
                    <div className='rom'>
                        <br/><br/>
                        <InsideFooter/>
                    </div>
                </div>
            </div>
            <div className='col'></div>

        </div>
      </div>
    );
}

export default Footer;
