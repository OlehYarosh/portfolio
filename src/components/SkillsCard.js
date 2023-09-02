import React from 'react';

const SkillsCard = ({ image, title, description }) => {
    return (
        <div className="skill">
            <img src={image} className="skill-icon" alt='logo'/>
            <h2 className="skill-name">{title}</h2>
            <p className="skill-description">{description}</p>
        </div>
    );
};
  
export default SkillsCard;