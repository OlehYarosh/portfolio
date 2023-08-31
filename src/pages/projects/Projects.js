import React from 'react';
import '../../styles/pages/projects/Projects.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';

const Projects = ({ myProjects, futureProjects }) => {
  return (
    <div className='projects-body'>
        <div className='my-project'>
            <h1>Мої проекти</h1>
            <div className='project-row'>
                <Link to='project-details' style={{ color: 'inherit' }}>
                    {myProjects.map((project) => (
                        <Card
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        />
                    ))}
                </Link>
            </div>
        </div>

        <div className='future-project'>
            <h1>Майбутні проекти</h1>
            <div className='project-row'>
                {futureProjects.map((project) => (
                <div className='card-project' key={project.id}>
                    <Card
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myProjects: state.myProjects,
  futureProjects: state.futureProjects,
});

export default connect(mapStateToProps)(Projects);
