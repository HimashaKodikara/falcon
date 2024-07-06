// src/App.js
import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import F1 from './images/F1.jpg';

const App = () => {
  const categories = ['Nature', 'Technology', 'Architecture', 'People', 'Animals'];

  const images = [
    { src: F1, description: 'A beautiful forest', category: 'Nature' },
    { src: 'tech1.jpg', description: 'Modern technology', category: 'Technology' },
    // Add more images for other categories
  ];

  return (
    <div className="App w-8">
      <Gallery categories={categories} images={images}  />
    </div>
  );
}

export default App;
