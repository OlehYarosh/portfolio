import React from 'react';
import '../../styles/pages/skills/Skills.css';
import SkillsCard from '../../components/SkillsCard';
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import react from '../../assets/skills/react.png'
import redux from '../../assets/skills/redux.png'
import npm from '../../assets/skills/npm.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import sql from '../../assets/skills/sql.png'
import webpack from '../../assets/skills/webpack.png'
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="skills-container">
            <h1 className="skills-title">{t('skills.header')}</h1>
            <div className="skills-list">
                <SkillsCard 
                    image={html}
                    title='HTML'
                    description={t('skills.descriptionHtml')}
                />
                <SkillsCard
                    image={css}
                    title='CSS'
                    description={t('skills.descriptionCss')}
                />
                <SkillsCard 
                    image={js}
                    title='JS'
                    description={t('skills.descriptionJs')}
                />
                <SkillsCard 
                    image={react}
                    title='React'
                    description={t('skills.descriptionReact')}
                />
                <SkillsCard 
                    image={npm}
                    title='npm'
                    description={t('skills.descriptionNpm')}
                />
                <SkillsCard 
                    image={sql}
                    title='SQL'
                    description={t('skills.descriptionSql')}
                />
                <SkillsCard 
                    image={webpack}
                    title='Webpack'
                    description={t('skills.descriptionWebpack')}
                />
                <SkillsCard 
                    image={redux}
                    title='Redux'
                    description={t('skills.descriptionRedux')}
                />
                <SkillsCard 
                    image={bootstrap}
                    title='Bootstrap'
                    description={t('skills.descriptionBootstrap')}
                />
            </div>
        </div>
    )
}

export default Skills;
