import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
    const [icon, setIcon] = useState(false);
    const [click, setClick] = useState(false);
    const [options, setOptions] = useState(false);
    const [categories, setCategories] = useState([]);

    const showIcon = () => window.innerWidth < 768 ? setIcon(true) : setIcon(false)

    useEffect(() => {
      getCategories().then(newCategories => setCategories(newCategories));
      showIcon();
      window.addEventListener('resize', showIcon);
      return () => {
        window.removeEventListener('resize', showIcon);
      }
    }, []);

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='sm:flex sm:flex-row sm:items-center xs:flex xs:flex-row xs:items-center md:!inline-block justify-between border-b w-full border-blue-400 py-8'>
              <div className='md:float-left block'>
                  <Link href='/'>
                      <span className='cursor-pointer font-bold text-4xl text-black'>
                          Dev Blog
                      </span>
                  </Link>
              </div>
              {icon ?
                <>
                <div className='w-7 h-7 float-right md:float-right mt-2 align-middle mr-2'>
                    {icon && <img onClick={() => setClick(!click)} className={click ? 'hidden w-full' : 'w-full'} src="https://res.cloudinary.com/plvtinum/image/upload/v1639997950/Dev-Blog/menu_kbzenk.png" alt="" />}
                    {icon && click && <img onClick={() => setClick(!click)} className='w-7 absolute top-5 right-5' style={{zIndex: 1002}} src="https://res.cloudinary.com/plvtinum/image/upload/v1639997950/Dev-Blog/close_hstydn.png" alt="" /> }
                </div>
           
                <div className='absolute top-0 right-0 bg-white' style={click ? {transition: 'opacity ease-out 0.3s', opacity: 1, zIndex:1001, width: '100%', height: '110vh'} : {visibility: 'hidden', opacity: 0}}>
                    <div className='w-full h-full flex flex-col items-center justify-evenly'>
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
                        <Link href={`/contact`}><span className='flex md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>Contact Us</span></Link>
                        <Link href={`/about`}><span className='flex md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>About</span></Link>
                    </div>       
                </div>
           
                </>
              :
                <div className='md:float-left md:contents'>
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
              }
            </div>
        </div>
    )
}

export default Header
