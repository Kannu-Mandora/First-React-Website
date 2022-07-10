import Navbar from './components/Navbar'
import Leftpanel from './components/Leftpanel'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>

  );

}
export default App;
