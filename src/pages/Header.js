import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Header.css'

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navigation">
            <Link to='/'>{t('header.projects')}</Link>
            <Link to='/skills'>{t('header.skills')}</Link> 
            <Link to='/jobs'>{t('header.jobs')}</Link>
            <Link to='/contacts'>{t('header.contacts')}</Link>
            <div className='buttons-lng'>
                <button onClick={() => changeLanguage('uk')}>Укр</button>
                <button onClick={() => changeLanguage('en')}>Eng</button>
            </div>
        </nav>
    )
}

export default Header;
