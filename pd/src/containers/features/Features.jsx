import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'World Class Faculty',
    text: 'Our Faculty includes National Award winners who themselves are trained by the FTIs and NSTIs of the country',
    link: '/',
  },
  {
    title: 'Great Alumni Network',
    text: 'People who were just a dreamer once are living their dream life today in the city of dreams',
    link: '/',
  },
  {
    title: 'Hands-on Experience',
    text: 'We believe that the best way to learn is to actually feel how the things are done at the actual workplace',
    link: '/',
  },
  {
    title: 'Best Placement Statistics',
    text: 'Students from Placing Dreams are provided with one the best networks in the industry which really help them getting started with their career ',
    link: '/',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">On-Shoot Training Programme for the first time in India</h1>
      <p>Creating A Better Artist; A Better Entertainer</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
