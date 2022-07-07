import React from 'react'

export default function Navbar(props) {

    const styleToggle={
        col: 'text-black',
        bgCol: 'bg-slate-300',
        light: 'Light',
        bgBtnCol: 'bg-white',
        txtCol: 'text-black'
    }


    // ! For dark Mode BTN

    // const [styleToggle, setStyle] = useState({
    //     col: 'text-black',
    //     bgCol: 'bg-slate-300',
    //     light: 'Light',
    //     bgBtnCol: 'bg-white',
    //     txtCol: 'text-black'
        
    // });
//     const onDark=()=>{
//     if(styleToggle.col==='text-black'){
//         setStyle({
//             col: 'text-white',
//             bgCol:'bg-black',
//             bgBtnCol: 'bg-black',
//             txtCol: 'text-white'
//         })
       
        
//     } else{
//         setStyle({
//             col: 'text-black',
//             bgCol:'bg-slate-300',
//             bgBtnCol: 'bg-white',
//             txtCol: 'text-black'
//         })
        
//     }
// }
        // !Dark Mode End.

  
    
   
   
    return (
        <>
            <div className={`flex border mx-auto sticky top-0 ${styleToggle.bgCol}`} style={styleToggle}>
                <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Home</a>
                <a href="/About" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>About Us</a>
                <a href="/Contact" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Contact Us</a>
                <a href="/Services" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Services</a>
                <img src={require('../images/kM.jpg')} alt="logo" className=' border-2 border-x-cyan-400  rounded-full w-11 h-11 absolute right-10 top-2 cursor-pointer hover:border-x-cyan-500 hover:border-2' />
               {/* <button className={`border-2 ${styleToggle.bgBtnCol} ${styleToggle.txtCol} rounded-md absolute right-32 top-3 px-1 border-red-200 flex items-center py-auto`}  onClick={onDark} >{props.mode}</button> */}
            </div>
            

        </>

    )
} 
Navbar.defaultProps={mode: 'Dark Mode'};
