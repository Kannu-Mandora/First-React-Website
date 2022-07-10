import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { useState } from "react";

import Navbar from './components/Navbar'
import Leftpanel from './components/Leftpanel'
import Textfield from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NavbarScreen from "./components/NavbarScreen";

function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Leftpanel />} />
      </Routes>
    <Routes>
      <Route path="/" element={<Textfield/>}></Route>
    </Routes>
    <Routes>
      <Route path="/About" element={<About heading='About Us'/>}></Route>
    </Routes>
    <Routes>
    <Route path="/Services" element={<Services/>}></Route>
    </Routes>
    <Routes>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>

    <Routes>
    <Route path="/" element={<NavbarScreen/>}></Route>
    </Routes>

    </>


  );



}
 

export default App;
