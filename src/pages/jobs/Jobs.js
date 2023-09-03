import React from 'react';
import '../../styles/pages/jobs/Jobs.css';
import JobsCard from '../../components/JobsCard';

const Jobs = () => {
    return (
        <div className="jobs-container">
            <div className="experience">
                <h1 className="jobs-header">Досвід роботи</h1>

                <JobsCard 
                    title='Front-End Розробник (Очікувана)'
                    description='Початок: 2023 (Очікується). Планую займатися розробкою веб-додатків та створенням візуально привабливих інтерфейсів'
                />
            </div>

            <div className="education">
                <h1 className="jobs-header">Освіта</h1>

                <JobsCard 
                    title="Бакалавр, Інформаційні системи та технології"
                    description='ЛНУ імені Івана Франка, 2020 - дотепер. Основні предмети: алгоритми, програмування, бази даних'
                />
                <JobsCard 
                    title='JavaScript : Занурення'
                    description='WayUp, початок/кінець: 2021. Безкоштовний курс з базовими уроками по JS'
                />
                <JobsCard 
                    title='Основи HTML/CSS'
                    description='GoIT, початок/кінець: 2022. Безкоштовний демо курс з основами HTML/CSS'
                />
                <JobsCard 
                    title='Front-End Advanced'
                    description='Cursor, початок/кінець: 2023. Онлайн курс з поглибленим вивченням javascript та інших фреймворків/бібліотек'
                />
            </div>
        </div>
    )
}

export default Jobs;
