import React from 'react';
import HomeHeader from "./HomeHeader";

function Contact() {
    return <div style={{marginTop: "1000px"}} id="contact">Kontakt</div>
}

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <div>
                Home
            </div>
            <Contact />
        </>
    );
};

export default Home;