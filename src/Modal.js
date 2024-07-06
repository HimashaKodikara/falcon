// src/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-4 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 bg-red-500 text-black p-2 px-6 font-bold rounded-3xl" onClick={onClose}>X</button>
        <img src={image.src} alt={image.description} className="mx-auto max-h-full max-w-3xl rounded-lg" />

      </div>
    </div>
  );
}

export default Modal;
