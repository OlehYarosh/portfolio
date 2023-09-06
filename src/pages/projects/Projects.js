import React from 'react';
import '../../styles/pages/projects/Projects.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { useTranslation } from 'react-i18next';

const Projects = ({ myProjects, futureProjects }) => {
    const { t } = useTranslation();
    return (
        <div className='projects-body'>
            <div className='my-project'>
                <h1 className='h-style'>{t('projects.myProjectsH')}</h1>
                <div className='project-row'>
                    <Link to='project-details' style={{ color: 'inherit' }}>
                        {myProjects.map((project) => (
                            <Card
                            key={project.id}
                            image={project.image}
                            title={t('projects.myProjectsTitle')}
                            description={t('projects.myProjectsDescription')}
                            />
                        ))}
                    </Link>
                </div>
            </div>

            <div className='future-project'>
                <h1 className='h-style'>{t('projects.futureProjectsH')}</h1>
                <div className='project-row'>
                    {futureProjects.map((project) => (
                    <div className='card-project' key={project.id}>
                        <Card
                        image={project.image}
                        title={t(`projects.futureProjectsTitleId${project.id}`)}
                        description={t(`projects.futureProjectsDescriptionId${project.id}`)}
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
