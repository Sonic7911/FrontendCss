import React from 'react';
import './Proj1css.css';
import qrImage from './assets/QR.png';

function Proj1() {
  return (
    <>
    <div id='screen'>
    <div id='cardHolder'>
      <div id='qr'>
        {/* Correct usage of the image source */}
        <img src={qrImage} alt="QR Code" />
      </div>
      <div id='information'>
          <div id='Heading'>Improve your frontend Skills by building projects</div>
          <div id='subInfo'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Proj1;
