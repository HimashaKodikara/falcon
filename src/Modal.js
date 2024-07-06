// src/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 bg-red-500 rounded-md p-2 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={image.src} alt={image.description} className="mx-auto max-h-full max-w-3xl rounded-lg" />
       
      </div>
    </div>
  );
}

export default Modal;
