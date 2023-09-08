import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/pages/Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    // eslint-disable-next-line
    const [scrollY, setScrollY] = useState(0);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (menuOpen && window.scrollY > 0) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpen]);

    return (
        <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <Link className='nav-item' to='/'>{t('header.projects')}</Link>
                <Link className='nav-item' to='/skills'>{t('header.skills')}</Link>
                <Link className='nav-item' to='/jobs'>{t('header.jobs')}</Link>
                <Link className='nav-item' to='/contacts'>{t('header.contacts')}</Link>
            </div>
            <div className='buttons-lng'>
                <button onClick={() => changeLanguage('uk')}>Укр</button>
                <button onClick={() => changeLanguage('en')}>Eng</button>
            </div>
        </nav>
    );
}

export default Header;
