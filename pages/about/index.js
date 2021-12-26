import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import React from 'react'

const about = () => {
    return (
        <div className="container mx-auto px-10 lg:px-20 mb-8 relative">
            <div className="grid lg:grid-cols-12 gap-4 bg-white shadow-lg rounded-lg">
                <h1 className='lg:col-start-6 lg:col-end-8 font-bold lg:text-3xl md:text-2xl sm:text-xl text-black py-3 border-b border-blue-400 absolute z-20 right-0 left-0 w-40 m-auto  text-center'>About Us</h1>
                <div className='lg:col-start-4 lg:col-end-10 px-10'>
                    <img className='w-full' src='https://res.cloudinary.com/plvtinum/image/upload/v1640012683/Dev-Blog/undraw_waqr0l.svg' />
                </div>
                <p className='lg:col-start-3 lg:col-end-11 col-start-1 font-medium text-center py-4 px-10'>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default about
