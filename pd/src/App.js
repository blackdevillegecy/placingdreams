import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from './containers/gallery/Gallery';
import Acting from './containers/courses/features/Acting';
import Editing from './containers/courses/features/Editing';
import FilmMaking from './containers/courses/features/FilmMaking';
import './App.css';
import Home from './containers/home/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery1" element={<Gallery />} />
      <Route path="/acting" element={<Acting />} />
      <Route path="/editing" element={<Editing />} />
      <Route path="/filmmaking" element={<FilmMaking />} />

    </Routes>
  </div>
);

export default App;
