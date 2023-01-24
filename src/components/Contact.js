import '../scss/contact.scss';

import React from 'react';

const Contact = () => {
    return (
        <div className='contact' name="homeContact">
            <form>
                <h2>Skontaktuj się z nami</h2>
                <div className='decoration'/>

                <div className='nameAndEmail'>
                    <div className='singleField'>
                        <label htmlFor='contactName'>Wpisz swoje imię</label>
                    </div>
                    <div className='singleField'>
                        <label htmlFor='contactMail'>Wpisz swój email</label>
                    </div>
                </div>
                <label htmlFor='contactMessage'>Wpisz swoja wiadomość</label>
                <div className='submit'>
                    <input type='submit' value="Wyślij"/>
                </div>
            </form>
        </div>
    );
};

export default Contact;