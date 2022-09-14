import React from 'react';
import './whatGPT3.css';
import img1 from './gallery_images/img54.jpg';
import img2 from './CERT1.jpg';
import img3 from './CERT2.jpg';

function WhatGPT3() {
  return (
    <div id="gallery">
      <div className="img">
        <img src={img1} alt="" />
      </div>
      <div className="img2">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default WhatGPT3;
