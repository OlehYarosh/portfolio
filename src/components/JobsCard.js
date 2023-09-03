import React from 'react';

const JobsCard = ({ title, description }) => {
    return (
        <div className="job-card">
            <h2 className="job-title">{title}</h2>
            <p className="job-description">{description}</p>
        </div>
    );
};
  
export default JobsCard;