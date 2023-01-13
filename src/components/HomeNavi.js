import React from 'react';
import './homeNavi.scss';

const HomeNavi = () => {
    return (
        <div className='container'>
        <nav>
            <ul className='right'>
                <li className='start'><a className='mainNavi' href="#">Start</a></li>
                <li className='other'><a className='mainNavi' href="#">O co chodzi?</a></li>
                <li className='other'><a className='mainNavi' href="#">O nas</a></li>
                <li className='other'><a className='mainNavi' href="#">Fundacja i organizacje</a></li>
                <li className='other'><a className='mainNavi' href="#">Kontakt</a></li>
            </ul>
        </nav>
        </div>
    );
};

export default HomeNavi;