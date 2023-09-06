import React from 'react';
import '../../../styles/pages/projects/ProjectDetails.css';
import Image from '../../../components/Image';
import project1 from '../../../assets/mini-project.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectDetails = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className='container'>
                <div className='left-side'>
                    <Image imageUrl={project1} />
                </div>
                <div className='right-side'>
                    <h1>{t('projectDetails.title')}</h1>
                    <span>{t('projectDetails.description')}</span>
                    <Link to="https://olehyarosh.github.io/hw16/" target='_blank'>{t('projectDetails.link')}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
