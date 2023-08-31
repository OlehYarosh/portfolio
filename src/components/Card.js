import React from 'react';
import '../styles/pages/projects/Projects.css'

const Card = ({ image, title, description, handleCardClick }) => {
  return (
    <div className="container">
        <div className="card" onClick={handleCardClick}>
            <div className="card-inner">
            <div className="front">
                <img src={image} alt="Зображення" className="project-image" />
                <h2>{title}</h2>
            </div>
            <div className="back">
                <p className="project-description">{description}</p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
