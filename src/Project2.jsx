import React from "react";
import "./Scss1.css";
import qrImage from "./assets/QR.png";


const socialMedia = ["Github", "Front-end Mentor", "LinkedIn", "Twitter", "Instagram"];

function Project2(){
    return (
        <>
        <div id='screen'>
        <div id='cardHolder'>
            <div id="profileImg">
                <img src={qrImage} alt="QR Code" />
            </div>
            <div id="profileName">Jessica Randal</div>
            <div id="profileLocation">London, United Kingdom</div>
            <div id="profileDescription">
                Front-end Developer and avid reader. 
            </div>

        {/* Link Section */}
        {socialMedia.map((item, index) => (
        <div key={index} className="item">
          {item}
        </div>
      ))}
        </div>
        </div>
        </>
      );
}

export default Project2;