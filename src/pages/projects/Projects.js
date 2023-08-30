import React from 'react';
import '../../styles/pages/projects/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1>Сторінка Projects</h1>
            <Link to='project-details'>Перейти до ProjectDetails перевірка</Link>
        </div>
    )
}

export default Projects;
