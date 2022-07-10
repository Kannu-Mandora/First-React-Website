import React from 'react'

export default function Navbar() {

    const styleToggle = {
        col: 'text-black',
        bgCol: 'bg-slate-300',
        light: 'Light',
        bgBtnCol: 'bg-white',
        txtCol: 'text-black'

    }




    function dropMenu() {
        let x = document.getElementById('dropMenuBar')
        if (x.style.display === 'none') {
            x.style.display = 'flex';
            console.log("if worked");
        } else {
            x.style.display = 'none';
            console.log("else worked");
        }



    }



    return (

        <>

            {/* For Mobile Display Navbar */}

            <div className={`${styleToggle.bgCol} py-1 hamburger`} >

                {/* Hamburger */}
                <div className="space-y-2 m-5" onClick={dropMenu}>
                    <span className="block w-8 h-1 bg-gray-600"></span>
                    <span className="block w-8 h-1 bg-gray-600"></span>
                    <span className="block w-8 h-1 bg-gray-600"></span>
                </div>

                <a href="/">
                    <img src={require('../images/kM.jpg')} alt="logo" className=' border-2 border-x-red-400  rounded-full w-11 h-11 absolute right-10 top-4 cursor-pointer hover:border-x-cyan-500 hover:border-2' />
                </a>

            </div>
            <div id="dropMenuBar">

                <div className={`flex flex-col w-screen sticky top-0 ${styleToggle.bgCol} `} style={styleToggle}>
                    <a href="/" className={`py-4 px-36  my-1 mx-auto cursor-pointer ${styleToggle.col} hover:underline `}>Home</a>
                    <a href="/About" className={`py-4 px-36  my-1 mx-auto cursor-pointer ${styleToggle.col} hover:underline `}>About Us</a>
                    <a href="/Contact" className={`py-4 px-36  my-1 mx-auto cursor-pointer ${styleToggle.col} hover:underline `}>Contact Us</a>
                    <a href="/Services" className={`py-4 px-36  my-1 mx-auto cursor-pointer ${styleToggle.col} hover:underline `}>Services</a>
                </div>
            </div>



            {/* For Laptop Screen Navbar */}
            <div className='navbar-info sticky top-0'>

                <div className={`flex border mx-auto sticky top-0 ${styleToggle.bgCol}`} style={styleToggle}>
                    <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Home</a>
                    <a href="/About" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>About Us</a>
                    <a href="/Contact" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Contact Us</a>
                    <a href="/Services" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Services</a>
                </div>
                <a href="/">
                    <img src={require('../images/kM.jpg')} alt="logo" className=' border-2 border-x-red-400  rounded-full w-11 h-11 absolute right-10 top-2 cursor-pointer hover:border-x-cyan-500 hover:border-2' />
                </a>


                {/* <button className={`border-2 ${styleToggle.bgBtnCol} ${styleToggle.txtCol} rounded-md absolute right-32 top-3 px-1 border-red-200 flex items-center py-auto`}  onClick={onDark} >{props.mode}</button> */}
            </div>



        </>

    )
}
