import React, { useState } from 'react'
import Button from '@component/component/Button'

function ContactForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emptyNameError, setEmptyNameError] = useState(false);
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emptyEmailError, setEmptyEmailError] = useState(false);

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);
    const [emptyMessageError, setEmptyMessageError] = useState(false);

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameError(!textVerify(value));
        setEmptyNameError(!value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!emailVerify(value));
        setEmptyEmailError(!value);
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        setMessageError(!textVerify(value));
        setEmptyMessageError(!value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setEmptyNameError(true);
        } else {
            setEmptyNameError(false);
        }

        if (email === '') {
            setEmptyEmailError(true);
        } else {
            setEmptyEmailError(false);
        }

        if (message === '') {
            setEmptyMessageError(true);
        } else {
            setEmptyMessageError(false);
        }
    };

    const textVerify = (text) => {
        if (text === '') {
            return false
        }
        const regex = /^[a-zA-Z]{3,}$/;
        return regex.test(text);
    };

    const emailVerify = (email) => {
        const regex =  /^[a-z0-9_]+@[a-z]\.[a-z\.]$/;
        return regex.test(email);
    };

  return (
    <div className='contact-us'>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label for='name'>Name</label>
              <input id='name' type='text' name='name' value={name} className={emptyNameError ? 'error' : ''} onChange={handleNameChange} />
              {emptyNameError ? <span id='name-error' className='error-message'>This field is required.</span> : ''}
            </div>
            <div className='form-input'>
              <label for='email'>Email</label>
              <input id='email' type='text' name='email' value={email} className={emptyEmailError || emailError ? 'error' : ''} onChange={handleEmailChange} />
              {emptyEmailError || emailError ? <span id='email-error' className='error-message'>Invalid email address.</span> : ''}
            </div>
            <div className='form-input'>
              <label for='message'>Message</label>
              <textarea id='message' name='message' rows='4' value={message} className={emptyMessageError ? 'error' : ''} onChange={handleMessageChange} />
              {emptyMessageError ? <span id='message-error' className='error-message'>This field is required.</span> : ''}
            </div>
            <Button type='submit' text='SUBMIT' />
          </form>
    </div>
  )
}

export default ContactForm