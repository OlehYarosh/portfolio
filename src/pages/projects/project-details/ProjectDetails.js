import React from 'react';
import '../../../styles/pages/projects/ProjectDetails.css';
import Image from '../../../components/Image';
import project1 from '../../../assets/mini-project.png';
import { Link } from 'react-router-dom';


const ProjectDetails = () => {
    return (
        <div>
            <div className='container'> 
                <div className='left-side'>
                    <Image imageUrl={project1} />
                </div>
                <div className='right-side'>
                    <h1>FellowshipTweets</h1>
                    <span>
                        Невелике завдання для освоєння компонентів в React, яке переросло в міні проект FellowshipTweets. 
                        Головною метою було створити компоненту у вигляді посту з твітера або фейсбука. В проекті було використано 
                        2 компоненти, одна на пост інша на юзера, окрім React-у додаткових бібліотек не було використано. 
                        Після реалізації компоненти засвітилась ідея, чому б не зробити міні твітер з всесвіту Володаря перснів, 
                        результат можна побачити за посиланням.
                    </span>
                    <Link to="https://olehyarosh.github.io/hw16/" target='_blank'>FellowshipTweets</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;