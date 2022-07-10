import React from 'react'
import Leftpanel from './Leftpanel'
import Navbar from './Navbar'


export default function About() {
  return (
    <>
      <Navbar />
      <Leftpanel />
      <div className='h-auto w-4/5 h1-sm'>
        <h1 className='flex flex-col font-sans font-extrabold text-4xl text-center text-white my-4 mx-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl w-auto px-10 py-5'>About Us</h1>

        <p className='p-sm text-black px-3 my-3'>Let me introduce myself; I'm <strong>Kannu Mandora</strong> from Padampur, Sriganganagar, Rajasthan.</p>

        <p className='text-black px-3 my-3'>I am a beginner web developer, having some skills in HTML5, CSS, Js, and ReactJS. I am also working on a project with the CSS framework Tailwind CSS.</p>
      </div>
    </>
  )
}
