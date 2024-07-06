// src/App.js
import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import F1 from './images/EXMO/F1.jpg';
import F2 from './images/EXMO/F2.jpg';
import F3 from './images/EXMO/F3.jpg';
import F4 from './images/EXMO/F4.jpg';
import E1 from './images/EV/E1.jpg';
import E2 from './images/EV/E2.jpg';
import E3 from './images/EV/E3.jpg';
import E4 from './images/EV/E4.jpg';
import E5 from './images/EV/E5.jpg';
import E6 from './images/EV/E6.jpg';
import B1 from './images/Formula/B1.jpg';
import B2 from './images/Formula/B1.jpg';
import B3 from './images/Formula/B1.jpg';
import B4 from './images/Formula/B1.jpg';


const App = () => {
  const categories = ['EXMO', 'EV Exhibition', 'Formula Bharat', 'People', 'Animals'];

  const images = [
    { src: F1, description: 'Falcon on road', category: 'EXMO' },
    { src: F2, description: 'Conferance', category: 'EXMO' },
    { src: F3, description: 'Conferance', category: 'EXMO' },
    { src: F4, description: 'Conferance', category: 'EXMO' },
    { src: E1, description: 'Modern technology', category: 'EV Exhibition' },
    { src: E2, description: 'Modern technology', category: 'EV Exhibition' },
    { src: E3, description: 'Modern technology', category: 'EV Exhibition' },
    { src: E4, description: 'Modern technology', category: 'EV Exhibition' },
    { src: E5, description: 'Modern technology', category: 'EV Exhibition' },
    { src: E6, description: 'Modern technology', category: 'EV Exhibition' },
    { src: B1, description: 'Modern technology', category: 'Formula Bharat' }, 
     { src: E6, description: 'Modern technology', category: 'Formula Bharat' },
     { src: E6, description: 'Modern technology', category: 'Formula Bharat' },
     { src: E6, description: 'Modern technology', category: 'Formula Bharat' },
     { src: E6, description: 'Modern technology', category: 'Formula Bharat' },
  ];

  return (
    <div className="App ">
      <Gallery categories={categories} images={images}  />
    </div>
  );
}

export default App;
