import Navbar from './components/Navbar'
import Leftpanel from './components/Leftpanel'
import Textfield from './components/Textfield'
import './App.css';
import React, { useState } from 'react'

// ! Always pass the value of color,bg-color into the form of tailwindcss Framework otherwise, its won't work!

function App() {
 
  return (
    <>
   <Navbar/>
   <Leftpanel/>
   <Textfield/>
    </>
  );
}

export default App;
