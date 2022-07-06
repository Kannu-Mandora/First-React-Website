import React from 'react'

export default function Leftpanel() {
  return (
    <div className='block border-2 border-slate-400 h-[685px] w-72 bg-white fixed right-0  z-50'>
      <div className='relative top-1 h-52 flex items-center mx-1'>
        <img src={require('../images/kM.jpg')} alt="logo" className=' border-4 border-slate-500 rounded-full w-44 mx-auto' />
      </div>
        <div className='flex flex-col m-1 h-auto'>
        <span className='mx-auto text-2xl font-mono font-bold'>Kannu Mandora</span>
        <p className='mx-auto font-mono p-3'>I am trying my best to make a react website with the help of CodeWithHarry YouTube Channel.</p>
       
        </div>

    </div>
  )
}
