import React from 'react'

export default function Leftpanel() {
  


  return (
    <>
      <div className=" line w-1 bg-green-200  ml-0 p-0 fixed right-72 h-screen"></div>
    <div className='block h-[685px] w-72 bg-white fixed right-0  z-50 border-2'>
      <div className='relative top-1 h-52 flex items-center mx-1'>
        <img src={require('../images/kM.jpg')} alt="logo" className=' border-4 border-slate-500 rounded-full w-44 mx-auto' />
      </div>
        <div className='flex flex-col m-1 h-auto'>
        <span className='mx-auto text-2xl font-mono font-bold'>Kannu Mandora</span>
        <p className='mx-auto font-mono text-sm p-3 font-semibold'>Thanks for visting our site.</p>
        <p className='mx-auto font-mono text-sm p-3 font-semibold'>Stay Safe Stay Smart.</p>
       
        </div>

    </div>
    </>
  )
}
