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

const Skills = () => {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Мої Навички</h1>
            <div className="skills-list">
                <SkillsCard 
                    image={html}
                    title='HTML'
                    description='Впевнений рівень веб-розробки з використанням HTML'
                />
                <SkillsCard
                    image={css}
                    title='CSS'
                    description='Досвід розробки стильового дизайну на CSS'
                />
                <SkillsCard 
                    image={js}
                    title='JS'
                    description='Розуміння та досвід програмування на JavaScript'
                />
                <SkillsCard 
                    image={react}
                    title='React'
                    description='Хороший рівень розробки веб-додатків з використанням бібліотеки React'
                />
                <SkillsCard 
                    image={npm}
                    title='npm'
                    description='Достатній рівень роботи з npm у веб-розробці'
                />
                <SkillsCard 
                    image={sql}
                    title='SQL'
                    description='Основні знання та досвід використання мови SQL для управління реляційними базами даних'
                />
                <SkillsCard 
                    image={webpack}
                    title='Webpack'
                    description='Достатній рівень використання Webpack для збору та оптимізації веб-додатків'
                />
                <SkillsCard 
                    image={redux}
                    title='Redux'
                    description='Достатній рівень використання Redux для керування станом додатків у веб-розробці'
                />
                <SkillsCard 
                    image={bootstrap}
                    title='Bootstrap'
                    description='Базовий рівень використання фреймворку Bootstrap для створення сучасних та адаптивних веб-інтерфейсів'
                />
            </div>
        </div>
    )
}

export default Skills;
