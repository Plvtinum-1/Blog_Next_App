import React, { useEffect, useState, useRef } from 'react'
import { submitContactMsg } from '../../services';

const index = () => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const messageRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        nameRef.current.value = window.localStorage.getItem('name');
        emailRef.current.value = window.localStorage.getItem('email');
    }, [])


    const handleMsgSubmission = () => {
        setError(false);
        const { value : message } = messageRef.current
        const { value: name } = nameRef.current
        const { value: email } = emailRef.current
        
        if(!message || !name || !email){
            setError(true);
            return;
        }
        const messageObj = {
            name, email, message
        }

        submitContactMsg(messageObj).then(res => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    }

    return (
        <div className="container mx-auto px-10 lg:px-20 mb-8 relative">
            <div className="py-5 px-5 gap-2 bg-white shadow-lg rounded-lg">
                <h1 className='text-xl mb-8 font-semibold border-b pb-4'>Contact Form</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input 
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    type="text"
                    ref={nameRef}
                    placeholder='Name'
                    name='name'
                    />
                    <input 
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    type="text"
                    ref={emailRef}
                    placeholder='Email'
                    name='email'
                    />
                </div>
                <div className='grid grid-cols-1 gap-4 mb-4'>
                    <textarea 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    ref={messageRef} 
                    placeholder='Message'
                    name="message" 
                    />
                </div>
               {error && <p className='text-xs text-red-500'>All fields are required</p>}
              <button 
                  className='transition duration-500 ease hover:bg-blue-800 inline-block bg-blue-500 lg:text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                  type='button'
                  onClick={handleMsgSubmission}
                  >
                    Submit
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Your message is successfully submitted</span>}
            </div>
              
            </div>
    )
}

export default index
