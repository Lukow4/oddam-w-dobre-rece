import React from 'react';
import HomeHeader from "./HomeHeader";
import '../scss/home.scss';
import {Link as ScrollLink} from "react-scroll";
import Achievements from "./Achievements";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Contact from "./Contact";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <section className='top-block'>
                <div className='hero-photo'></div>
                <div className='hero-text'>
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className='decoration'/>
                    <div className='bttns'>
                        <ScrollLink
                            activeClass="active"
                            className="bttn"
                            to=""
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            ODDAJ<br/>RZECZY
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            className="bttn"
                            to=""
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            ZORGANIZUJ<br/>ZBIÓRKĘ
                        </ScrollLink>

                    </div>
                </div>
        </section>
            <Achievements/>
            <FourSteps/>
            <AboutUs/>

            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;