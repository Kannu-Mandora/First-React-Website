import React, {useState} from 'react'

export default function Navbar(props) {
   
    
    const [styleToggle, setStyle] = useState({
            col: 'text-black',
            bgCol: 'bg-slate-300',
            light: 'Light',
            bgBtnCol: 'bg-white',
            txtCol: 'text-black'
            
    });
    const onDark=()=>{
        if(styleToggle.col==='text-black'){
            setStyle({
                col: 'text-white',
                bgCol:'bg-black',
                bgBtnCol: 'bg-black',
                txtCol: 'text-white'
            })
           
            
        } else{
            setStyle({
                col: 'text-black',
                bgCol:'bg-slate-300',
                bgBtnCol: 'bg-white',
                txtCol: 'text-black'
            })
            
        }
       
     
    }
   
   
    return (
        
        
        <>
            <div className={`flex border mx-auto sticky top-0 ${styleToggle.bgCol}`} style={styleToggle}>
                <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Home</a>
                <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>About Us</a>
                <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Contact Us</a>
                <a href="/" className={`px-6 py-4 cursor-pointer ${styleToggle.col} hover:underline`}>Services</a>
                <img src={require('../images/kM.jpg')} alt="logo" className=' border rounded-full w-14 absolute right-10 top-2 cursor-pointer hover:border-gray-500 hover:border-4' />
               <button className={`border-2 ${styleToggle.bgBtnCol} ${styleToggle.txtCol} rounded-md absolute right-32 top-3 px-1 border-red-200 flex items-center py-auto`}  onClick={onDark} >{props.mode}</button>
            </div>
            

        </>

    )
} 
Navbar.defaultProps={mode: 'Dark Mode'};
