import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const storeDataRef = useRef();

    useEffect(() => {
        nameRef.current.value = window.localStorage.getItem('name');
        emailRef.current.value = window.localStorage.getItem('email');
    }, [])


    const handleCommentSubmission = () => {
        setError(false);
        const { value : comment } = commentRef.current
        const { value: name } = nameRef.current
        const { value: email } = emailRef.current
        const { checked: storeData } = storeDataRef.current

        
        if(!comment || !name || !email){
            setError(true);
            return;
        }
        const commentObj = {
            name, email, comment, slug
        }
        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }

        submitComment(commentObj).then(res => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a comment</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                  className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                  ref={commentRef} 
                  placeholder='Comment'
                  name="comment" 
                />
            </div>
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
            {error && <p className='text-xs text-red-500'>All fields are required</p>}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <div className=''>
                    <input 
                      className=''
                      ref={storeDataRef} 
                      type="checkbox" 
                      id='storeData'
                      name='storeData'
                      value='true'
                    />
                    <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2'>Save my email and name for next time</label>
                </div>
            </div>
            <div className='mt-8'>
                <button 
                  className='transition duration-500 ease hover:bg-blue-800 inline-block bg-blue-500 lg:text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                  type='button'
                  onClick={handleCommentSubmission}
                  >
                    Post Comment
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
