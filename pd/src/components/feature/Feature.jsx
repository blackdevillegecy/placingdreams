import React from 'react';
import './feature.css';
import { Link } from 'react-router-dom';

const Feature = ({ title, text, link }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <Link to={link}><h1>{title}</h1></Link>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
