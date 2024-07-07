// src/Gallery.js
import React, { useState } from 'react';
import Modal from './Modal';

const Gallery = ({ categories, images }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = images.filter(image => image.category === selectedCategory);

  return (
    <div className="gallery-container">
      <div className="flex flex-wrap justify-center p-4 space-x-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${category === selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} mb-2`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:mx-10 sm:mx-6">
        {filteredImages.map(image => (
          <div key={image.src} className="image-item" onClick={() => setSelectedImage(image)}>
            <div className="h-full overflow-hidden shadow-lg rounded-2xl">
              <img src={image.src} alt={image.description} className="object-cover w-full h-auto cursor-pointer" />
              <p className="my-2 font-serif text-center">{image.description}</p>
            </div>
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
