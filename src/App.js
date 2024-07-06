// src/App.js
import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';

const App = () => {
  const categories = ['Nature', 'Technology', 'Architecture', 'People', 'Animals'];

  const images = [
    { src: 'nature1.jpg', description: 'A beautiful forest', category: 'Nature' },
    { src: 'tech1.jpg', description: 'Modern technology', category: 'Technology' },
    // Add more images for other categories
  ];

  return (
    <div className="App">
      <Gallery categories={categories} images={images} />
    </div>
  );
}

export default App;
