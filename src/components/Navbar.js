import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='flex border mx-auto bg-slate-300 sticky top-0'>
                <a href="/" className='px-6 py-4 cursor-pointer hover:underline'>Home</a>
                <a href="/" className='px-6 py-4 cursor-pointer hover:underline'>About Us</a>
                <a href="/" className='px-6 py-4 cursor-pointer hover:underline'>Contact Us</a>
                <a href="/" className='px-6 py-4 cursor-pointer hover:underline'>Services</a>
                <img src={require('../images/kM.jpg')} alt="logo" className=' border rounded-full w-14 absolute right-10 top-2 cursor-pointer hover:border-gray-500 hover:border-2' />
               <button className='border-2 border-slate-600 rounded-md absolute right-32 top-3 px-1 hover:bg-[#333333] hover:text-white hover:border-red-200 flex items-center py-auto'>Dark Mode</button>
            </div>
            

        </>

    )
}
