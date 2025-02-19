import React from 'react'
import '../styles/NavBar.css'
import Logo from '../assets/Logo.webp'
import "../App.css"
import { IoIosArrowDown } from "react-icons/io";

function NavBar() {
  return (
    <div>

        <div className='NavBar_Top'>
        Navigate your ideal career path with tailored expert advice
        <span>Contact Experts</span>
        </div>


        <div className='NavBar_Container'>
            <div className='NavBar_Left'>
                <img src={Logo} alt="" />
                <div className='NavBar_Left_Button'>
                    Courses
                    <IoIosArrowDown />
                </div>

            </div>

            <div className='NavBar_Right'>

                <div className='NavBar_Right_Container'>

                    <div className='Nav_Right_Text'>Refer & Earn</div>
                    <div className='Nav_Right_Text'>Resources</div>
                    <div className='Nav_Right_Text'>About us</div>
                    <div className='Nav_Right_Button'>Login</div>
                    <div className='Nav_Right_Button2'>Try for free</div>

                </div>

            </div>


        </div>



        <div className='NavBar_Bottom'>
            <div className='NavBar_Bottom_Container'>

            <div>Refer</div>
            <div>Benefit</div>
            <div>FAQs</div>
            <div>Support</div>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
