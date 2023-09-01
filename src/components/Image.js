import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/pages/projects/ProjectDetails.css';

function ImageModal({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    const modal = (
      <div className="modal">
        <div className="modal-background" onClick={closeModal}></div>
        <span className="close" onClick={closeModal}>&times;</span>
        <img
          src={imageUrl}
          alt="Зображення"
          className="modal-content modal-image"
        />
      </div>
    );

    return ReactDOM.createPortal(modal, document.body);
  }

  return (
    <img
      src={imageUrl}
      alt="Зображення"
      onClick={openModal}
      className="thumbnail-image"
    />
  );
}

export default ImageModal;
