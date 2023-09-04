import React from 'react';
import '../../styles/pages/contacts/Contacts.css';
import image from '../../assets/photo.png';

const Contacts = () => {
    return (
        <div className='contact-container'>
            <div className='contact-card'>
                <h1 className='contact-name'>Олег Ярош</h1>
                <img src={image} alt='img' className='user-image' />
                <p className='user-text'>Зацікавлений розробник веб-сайтів, який завжди готовий вивчати нові технології та робити веб-додатки більш інтерактивними.</p>
                <ul className='contact-details'>
                    <li className='user-number'>Робочий номер: +380682886168</li>
                    <li className='user-email'>Робоча пошта: <a href='mailto:yarosh.oleg07@gmail.com'>yarosh.oleg07@gmail.com</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;
