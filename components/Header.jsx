import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [options, setOptions] = useState(false);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
      window.innerWidth
      getCategories().then(newCategories => setCategories(newCategories));
    }, []);


    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
              <div className='md:float-left block'>
                  <Link href='/'>
                      <span className='cursor-pointer font-bold text-4xl text-black'>
                          Dev Blog
                      </span>
                  </Link>
              </div>
              <div className='hidden md:float-left md:contents'>
                <Link href={`/contact`}><span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>Contact Us</span></Link>
                <Link href={`/about`}><span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>About</span></Link>
                <div className="relative inline-block text-left float-right">
                    <div>
                        <button onClick={() => setOptions(!options)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 font-semibold text-black  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Categories
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    <div style={!options ? {visibility: 'hidden', zIndex: 1001} : {visibility: 'visible', zIndex: 1001}} className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            {categories.map((category, i) => (
                                    <Link key={i} href={`/category/${category.slug}`}><span onClick={() => setOptions(false)}  className="cursor-pointer text-gray-700 block px-4 py-2 text-sm">{category.name}</span></Link>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Header
