import React from 'react';
import './homeNavi.scss';
import {Link as ScrollLink} from "react-scroll";

const HomeNavi = () => {
    return (
        <div className='container'>
            <nav>
                <ul className='right'>
                    <li className='start'>
                        <ScrollLink
                            activeClass="active"
                            to="homeHeader"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Start
                        </ScrollLink>
                    </li>
                    <li className='other'><a className='mainNavi' href="#">O co chodzi?</a></li>
                    <li className='other'><a className='mainNavi' href="#">O nas</a></li>
                    <li className='other'><a className='mainNavi' href="#">Fundacja i organizacje</a></li>
                    <li className='other'>
                        <ScrollLink
                            className="mainNavi"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1500}
                            delay={500}
                        >
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomeNavi;