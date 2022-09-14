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
      <div className="textbelow">
        <div style={{ textAlign: 'center' }}>Appreciation letter from Swinburne <br /> University Australia and put Jio wala</div>
        <div>Association with Jio Studio</div>
      </div>
      <div className="buttons">
        <div><button className='buttons-btn' id="list" style={{ marginLeft: '38px' }}>Alumni List</button></div>
        <div><button className='buttons-btn' id="reviews" style={{ marginLeft: '38px' }}>Google Reviews</button></div>
      </div>
    </div>
  );
}

export default WhatGPT3;
