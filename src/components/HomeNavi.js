import React from 'react';
import './homeNavi.scss';

const HomeNavi = () => {
    return (
        <div className='container'>
        <nav>
            <ul className='right'>
                <li className='start'><a href="#">Start</a></li>
                <li className='other'><a href="#">O co chodzi?</a></li>
                <li className='other'><a href="#">O nas</a></li>
                <li className='other'><a href="#">Fundacja i organizacje</a></li>
                <li className='other'><a href="#">Kontakt</a></li>
            </ul>
        </nav>
        </div>
    );
};

export default HomeNavi;