import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navigation">
            <Link to='/'>Проекти</Link>
            <Link to='/skills'>Навички</Link> 
            <Link to='/jobs'>Досвід</Link>
            <Link to='/contacts'>Контакти</Link>
        </nav>
    )
}

export default Header;
