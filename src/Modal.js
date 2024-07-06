// src/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-4 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>X</button>
        <img src={image.src} alt={image.description} className="w-full h-auto rounded-lg" />
        <p className="mt-4">{image.description}</p>
      </div>
    </div>
  );
}

export default Modal;
