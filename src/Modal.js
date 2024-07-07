// src/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 lg:w-3/5 lg:h-3/4 modal lg:mx-auto lg:my-auto ">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg modal-content">
        <button
          className="absolute p-2 text-black bg-white rounded-md right-2 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={image.src} alt={image.description} className="object-contain w-auto h-auto " />
       
      </div>
    </div>
  );
}

export default Modal;
