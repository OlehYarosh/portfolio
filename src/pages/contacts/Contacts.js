import React from 'react';
import '../../styles/pages/contacts/Contacts.css';
import image from '../../assets/photo.png';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div className='contact-container'>
            <div className='contact-card'>
                <h1 className='contact-name'>{t('contacts.name')}</h1>
                <img src={image} alt='img' className='user-image' />
                <p className='user-text'>{t('contacts.description')}</p>
                <ul className='contact-details'>
                    <li className='user-number'>{t('contacts.number')}</li>
                    <li className='user-email'>{t('contacts.email')} <a href='mailto:yarosh.oleg07@gmail.com'>yarosh.oleg07@gmail.com</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;
