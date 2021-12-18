import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug).then(result => setRelatedPosts(result));
        } else {
            getRecentPosts().then(result => setRelatedPosts(result));
        }
    }, [slug])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-blue-400 pb-4'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post, i) => ( 
               <div key={i} className='flex items-center w-full mb-4'>
                   <div className='w-16 flex-none'>
                       <img 
                         src={post.featuredImage.url} 
                         alt={post.title}
                         className='align-middle rounded-full'
                         height='60px'
                         width='60px' 
                        />
                   </div>
                   <div className='flex-grow ml-4'>
                       <p className='text-gray-500 font-xs'>
                           {moment(post.createdAt).format('MMM DD, YYYY')}
                       </p>
                       <Link href={`/post/${post.slug}`} className='text-md' key={i}>
                           {post.title}
                       </Link>
                   </div>
               </div> 
            ))}
        </div>
    )
}

export default PostWidget
