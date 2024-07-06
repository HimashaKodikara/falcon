// src/Gallery.js
import React, { useState } from 'react';
import Modal from './Modal';

const Gallery = ({ categories, images }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = images.filter(image => image.category === selectedCategory);

  return (
    <div className="gallery-container">
      <div className="category-nav flex space-x-4 p-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${category === selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="image-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredImages.map(image => (
          <div key={image.src} className="image-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.description} className="w-full h-auto rounded-lg shadow-lg" />
            <p className="text-center mt-2">{image.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default Gallery;
