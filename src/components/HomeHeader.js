import React from 'react';
import HomeNavi from "./HomeNavi";
import './homeHeader.scss';

const HomeHeader = () => {
    return (
        <>
            <div className='container'>
            <nav>
                <ul className='right'>
                    <li>Zaloguj</li>
                    <li>Załóż konto</li>
                </ul>
            </nav>

            <HomeNavi/>
            </div>
            </>
    );
};

export default HomeHeader;