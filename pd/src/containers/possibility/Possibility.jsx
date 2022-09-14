import React from 'react';
import neon2 from './neon2.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={neon2} width="480" height="500" id="neon2" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>But question yourself</h4>
      <h1 className="gradient__text">Why we are <br /> the best for you?</h1>
      <p>We focus on practical knowledge of the set. Communication with the crew, and how to deal with production. We consider the passion of students as our assets and help them acquire them. Placing Dreams give individual attention to each student and help them fly with their own exclusive colors. Our belief is that evry expert was once a beginner. We provide an apt platform for a beginner to learn the basics of acting and skills behind the camera. Courses here are designed with minute detailing of tools and process of filmmaking.</p>
      <h4>The Trust, The Care and The hard Work makes us the perfect companion for your dreams </h4>
    </div>
  </div>
);

export default Possibility;
