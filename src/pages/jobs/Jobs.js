import React from 'react';
import '../../styles/pages/jobs/Jobs.css';
import JobsCard from '../../components/JobsCard';
import { useTranslation } from 'react-i18next';

const Jobs = () => {
    const { t } = useTranslation();

    return (
        <div className="jobs-container">
            <div className="experience">
                <h1 className="jobs-header">{t('jobs.experienceH')}</h1>

                <JobsCard 
                    title={t('jobs.experienceTitle')}
                    description={t('jobs.experienceDescription')}
                />
            </div>

            <div className="education">
                <h1 className="jobs-header">{t('jobs.educationH')}</h1>

                <JobsCard 
                    title={t('jobs.educationTitle1')}
                    description={t('jobs.educationDescription1')}
                />
                <JobsCard 
                    title={t('jobs.educationTitle2')}
                    description={t('jobs.educationDescription2')}
                />
                <JobsCard 
                    title={t('jobs.educationTitle3')}
                    description={t('jobs.educationDescription3')}
                />
                <JobsCard 
                    title={t('jobs.educationTitle4')}
                    description={t('jobs.educationDescription4')}
                />
            </div>
        </div>
    )
}

export default Jobs;
