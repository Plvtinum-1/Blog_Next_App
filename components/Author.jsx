import React from 'react';
import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-blue-400 bg-opacity-40'>
            <div className='absolute left-0 right-0 -top-12'>
                <Image
                unoptimized
                src={author.photo.url} 
                alt={author.name}
                width='100px'
                height='100px'
                className='align-middle rounded-full' 
                />    
            </div> 
            <h3 className='text-black my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-black text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author
