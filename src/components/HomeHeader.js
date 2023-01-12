import React from 'react';
import HomeNavi from "./HomeNavi";
import './homeHeader.scss';

const HomeHeader = () => {
    return (
        <>
            <div className='container'>
            <nav>
                <ul className='right'>
                    <li className='logIn'><a href="#">Zaloguj</a></li>
                    <li className='signUp'><a href="Register">Załóż konto</a></li>
                </ul>
            </nav>

            <HomeNavi/>
            </div>
            </>
    );
};

export default HomeHeader;