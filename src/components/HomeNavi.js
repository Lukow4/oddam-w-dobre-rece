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
                    <li className='mainNavi'>
                        <ScrollLink
                            activeClass="active"
                            to="homeHeader"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            O co chodzi?
                        </ScrollLink>
                    </li>
                    <li className='mainNavi'>
                        <ScrollLink
                            activeClass="active"
                            to="homeHeader"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            O nas
                        </ScrollLink>
                    </li>
                    <li className='mainNavi'>
                        <ScrollLink
                            activeClass="active"
                            to="homeHeader"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Fundacja i organizacje
                        </ScrollLink>
                    </li>
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