import React from 'react';
import {Link} from "react-router-dom";
import HomeNavi from "./HomeNavi";
import './homeHeader.scss';

const HomeHeader = () => {
    return (
        <div className='container' id="homeHeader">
            <nav>
                <ul className='right'>
                    <li className='logIn'>
                        <Link to="/login">Zaloguj się</Link>
                    </li>
                    <li className='signUp'>
                        <Link to="/register">Załóż konto</Link>
                    </li>
                </ul>
            </nav>
            <HomeNavi/>
        </div>
    );
};

export default HomeHeader;