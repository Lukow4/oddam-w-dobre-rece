import React from 'react';
import HomeHeader from "./HomeHeader";
import '../scss/register.scss';

const Register = () => {
    return (
        <>
            <HomeHeader/>
            <div className='register'>
               <h2>Załóż konto</h2>
                <div className='decoration'> </div>
                <form>
                    <div className='form-fields'>
                        <div className='single-field'>
                            <label htmlFor="">Email</label>
                            <input type="text" name="Email"></input>
                        </div>
                        <div className='single-field'>
                            <label htmlFor="">Hasło</label>
                            <input type="password" name="Hasło"></input>
                        </div>
                        <div className='single-field'>
                            <label htmlFor="">Powtórz hasło</label>
                            <input type="password" name="Powtórz hasło"></input>
                        </div>
                        <div className='form-buttons'>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button className='empty-button'>Zaloguj się</button>
                        <button>Załóż konto</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;