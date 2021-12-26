import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='container mx-auto px-12 mb-8'>
            <div className='flex justify-between items-center border-t border-blue-400 py-8'>
                <span ><span className='font-bold text-xl text-black'>Dev Blog</span>  <span>|</span> <span>Copyright &copy; 2021</span></span>
                <div className='flex flex-row lg:!flex-row xs:flex-col items-center justify-center'>
                    <Link href={'/about'}><span className='font-medium text-black mr-3 xs:mb-3 lg:!mb-0 cursor-pointer'>About us</span></Link>
                    <Link href={'/privacy-policy'}><span className='font-medium text-black mr-3 xs:mb-3 lg:!mb-0 cursor-pointer'>Privacy Policy</span></Link>
                    <Link href={'/contact'}><span className='font-medium text-black cursor-pointer'>Contact Us</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
