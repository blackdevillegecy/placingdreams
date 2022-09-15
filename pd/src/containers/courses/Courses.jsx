import React from 'react';
import Feature from '../../components/feature/Feature';
import './courses.css';

function Courses() {
  return (
    <div id="wgpt3" style={{ paddingTop: '2rem' }}>
      <div className="gpt3__whatgpt3 section__margin">
        <div className="gpt3__whatgpt3-feature">
          <Feature title="What Courses do we offer?" text="Decide what's the best for you" link="/" />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">Practical and Up-to-date syllabus with World Class Faculty</h1>
          <p>Explore the possibilities</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature title="Acting" text="The most in-demand skill in the industry" link="/acting" />
          <Feature title="Editing" text="Learn the intricate ways of presentation and refining of the content in the entertainment world" link="/editing" />
          <Feature title="Film Making" text="Understand how to develop the 'vision' which is required to craft the once in a lifetime masterpieces" link="/filmmaking" />
          <Feature title="Writing" text="Become the best in the wizardry of words and forge the classics the future generations will remember" link="/writing" />  
        </div>
      </div>
    </div>
  );
}

export default Courses;
