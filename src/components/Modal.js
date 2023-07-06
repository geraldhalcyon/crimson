'use client'

import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const FormComponent = () => {
  const [subjectError, setSubjectError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  

  const handleSubjectInput = (e) => {
    const subject = e.target.value.trim();
    if(subject === ''){
      setSubjectError('Subject is required.');
    } else{
      setSubjectError('');
    }
  };

  const handleEmailInput = (e) => {
    const email = e.target.value.trim();
    if (email === '') {
      setEmailError('Email is required.');
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const handleMessageInput = (e) => {
    const message = e.target.value.trim();
    if(message === ''){
      setMessageError('Message is required.');
    } else{
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectInput = document.getElementById('subject');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    const recaptchaValue = document.getElementById("g-recaptcha-response").value;
    if (!recaptchaValue) {
      alert('Error');
      return;
    }

    if (subjectInput.value.trim() === '') {
      setSubjectError('Subject is required.');
      isValid = false;
    }

    if (emailInput.value.trim() === '') {
        setEmailError('Email is required.');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        setEmailError('Enter a valid email.');
        isValid = false;
      }

    if (messageInput.value.trim() === '') {
        setMessageError('Message is required.');
        isValid = false;
      }
    
    setSubmitClicked(true);

    if (isValid) {

      console.log('Form submitted!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action='#'
      method='post'
      className='w-[100%] font-secondary font-light'
    >
      <div className="mb-4">
        <input
          type="text"
          id="subject"
          name="subject"
          className={`w-[100%] px-[12px] py-[10px] border-[1px] border-solid text-[#000] border-[#b6c6ca] text-[16px] focus:outline-none ${
            subjectError || (submitClicked && subjectError !== '') ? 'border-red-500' : ''
          }`}
          onInput={handleSubjectInput}
          placeholder='Subject *'
        />
        {subjectError && (
          <p className="text-[#d93025] text-md md-1 mt-1">{subjectError}</p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          className={`w-[100%] px-[12px] py-[10px] border-[1px] border-solid text-[#000] border-[#b6c6ca] text-[16px] focus:outline-none ${
            emailError || (submitClicked && emailError !== '') ? 'border-red-500' : ''
          }`}
          onInput={handleEmailInput}
          placeholder="Email *"
        />
        {emailError && <p className="text-[#d93025] text-md mt-1">{emailError}</p>
        }
      </div>

      <div className="mb-4">
        <textarea
          type="textarea"
          id="message"
          name="message"
          className={`w-[100%] px-[12px] py-[10px] border-[1px] border-solid text-[#000] border-[#b6c6ca] text-[16px] focus:outline-none ${
            messageError || (submitClicked && messageError !== '') ? 'border-red-500' : ''
          }`}
          onInput={handleMessageInput}
          placeholder='Message *'
        />
        {messageError && (
          <p className="text-[#d93025] text-md">{messageError}</p>
        )}
      </div>

      <div className='mb-4'>
        <textarea
          type="textarea"
          id="other_requests"
          name='other_requests'
          placeholder='Other requests'
          className='w-[100%] px-[12px] py-[10px] border-[1px] border-solid text-[#000] border-[#b6c6ca] text-[16px] focus:outline-none'
        ></textarea>
      </div>
      <div className="mb-4">
        <ReCAPTCHA sitekey="6Lfw-_smAAAAAAhShBcjSXhdk1rYRgh4WxBorMKD" />
      </div>
      <button
        type="submit"
        name="submit"
        className="text-[13px] uppercase px-[20px] py-[15px] font-primary text-[var(--primary-color)] bg-[var(--secondary-color)] hover:bg-[var(--fourth-color)]"
        disabled={!recaptchaValue} // Disable the button when reCAPTCHA is not validated
      >
        Submit
      </button>
    </form>

    
  );
};

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 z-[50] bg-[rgb(0,0,0)]/40 flex justify-center items-center overflow-auto">
      <div className="mx-[10px] md:mx-[0px] w-[886px] m-w-[100%] flex flex-col bg-white">
        <div className="flex justify-center py-[20px] px-[8px] bg-[#eef6f8] relative">
          <h1 className="text-center text-[#333] uppercase text-[30px] font-secondary font-black">
            Contact Us
          </h1>
          <button
            className="absolute text-[20px] right-[10px] top-[20px] text-black hover:text-opacity-50"
            onClick={onClose}
          >
            &#10005;
          </button>
        </div>
        <div className="bg-[#e6f1f3] min-h-[442px] py-[30px] rounded overflow-auto px-[15px]">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Modal;
