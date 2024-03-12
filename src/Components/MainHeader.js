import React from 'react';
import '../Styles/MainHeaderStyle.css';
import InsideFooter from '../Components/InsideFooter'


function MainHeader() {
  return (
    <table>
        <tr>
            <th>≡ MENU</th>
            <td className='tdx'>ABOUT</td>
            <td className='tdx'><small>1/1 ART</small></td>
            <td className='tdx'>EDITIONS</td>
            <td className='tdx'>LEADER-BOARD</td>
            <td className='tdx'>RUNES</td>
            <td className='tdx'>STUDIO</td>
            <td>
                <div className='container'>
                <div class="row">
                    <span style={{ marginLeft : 5 }}>
                       <div href="#" class="btn" style={{ margin:20, width: 100, height: 15, textAlign: 'center' }}><small><small style={{ textAlign: 'center' }}>Connect Wallet</small></small></div>
                    </span>
                  </div>    
                </div>
            </td>
        </tr>
    </table>
  );
}

export default MainHeader;
