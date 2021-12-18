import React from 'react';

import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, SideAd } from '../../components';
import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post} />
                    <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='relative top-0 mb-5'>
                        <PostWidget slug={post.slug} categories={post.categories.map(cat => cat.slug)} />
                        <Categories />
                    </div>
                    <div className='lg:sticky relative top-6'>
                        <SideAd />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;

export async function getStaticProps({ params }){
    const data = await getPostDetails(params.slug);
    return {
      props: { 
        post: data,
      },
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: {slug} }) => ({ params: {slug} })),
        fallback: false,
    }
}
