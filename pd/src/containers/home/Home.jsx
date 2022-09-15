import React from 'react';
import './home.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Courses } from '../index';
import { CTA, Navbar } from '../../components';

function Home() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <CTA />
      <WhatGPT3 />
      <Possibility />
      <Features />
      <Courses />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
