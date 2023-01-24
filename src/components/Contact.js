import '../scss/contact.scss';
import React, {useState} from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const inputHandler = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
           method: "Post",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(res2 => console.log(res2))
            .catch(error => console.log({error}))
    }

    return (
        <div className='contact' name="homeContact">
            <form onSubmit={submitHandler}>
                <h2>Skontaktuj się z nami</h2>
                <div className='decoration'/>

                <div className='nameAndEmail'>
                    <div className='singleField'>
                        <label htmlFor='contactName'>
                            Wpisz swoje imię
                            <input
                                name="name"
                                value={formData.name}
                                onChange={(e) => inputHandler(e)}
                            />
                        </label>
                    </div>
                    <div className='singleField'>
                        <label htmlFor='contactMail'>
                            Wpisz swój email
                            <input
                                name="email"
                                value={formData.email}
                                onChange={(e) => inputHandler(e)}
                            />
                        </label>
                    </div>

                </div>
                <label htmlFor='contactMessage'>
                    Wpisz swoja wiadomość
                    <input
                        name="message"
                        value={formData.message}
                        onChange={(e) => inputHandler(e)}
                    />
                </label>
                <div className='submit'>
                    <input type='submit' value="Wyślij"/>
                </div>
            </form>
        </div>
    );
};

export default Contact;