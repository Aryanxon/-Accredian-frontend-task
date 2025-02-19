import React from 'react'
import '../styles/FAQ.css'
import { TfiHeadphoneAlt } from "react-icons/tfi";

function FAQ() {
  return (
    <div>
        <div className='FAQ_Container'>
                <div className='FAQ_header'>
                Frequently Asked <span style={{color: 'rgba(26, 115, 232, 1)'}}>Questions</span> 
                </div>
            <div>



                <div className='FAQ_Main'>

                    <div className='FAQ_left'>

                        <div className='FAQ_left_Button'>Eligibility</div>
                        <div className='FAQ_left_Button'>How to use?</div>
                        <div className='FAQ_left_Button'>Terms & Conditions</div>

                    </div>


                    <div className='FAQ_Right'>
                        <div className='FAQ_para' style={{color: 'rgba(26, 115, 232, 1)'}}>
                        Do I need to have prior Product Management and Project Management experience to enroll in the program?
                        </div>
                        <div className='FAQ_para'>
                        No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                        suitable for individuals from any field of work.                        
                        </div>
                        <div className='FAQ_para' style={{fontWeight: '900'}}>
                        What is the minimum system configuration required?                        
                        </div>
                    </div>

                </div>


            </div>



            <div className='FAQ_Bottom'>
                <div className='FAQ_Bottom_Left'>
                    <div className='FAQ_Bottom_Left_Icon'><TfiHeadphoneAlt style={{color: 'rgba(26, 115, 232, 1)', fontSize: '20px', fontWeight: '800'}}/>
                    </div>
                    <div className='FAQ_Bottom_Left_content'>
                        <div className='FAQ_Bottom_Left_para'>Want to delve deeper into the program?</div>
                        <div className='FAQ_Bottom_Left_para' style={{fontSize: '16.73px'}}>Share your details to receive expert insights from our program team!</div>
                    </div>
                </div>



                <div className='FAQ_Bottom_Right'>
                    <div className='FAQ_Bottom_Right_Button'>
                        Get In Touch
                    </div>
                </div>
                 
            </div>




        </div>
      
    </div>
  )
}

export default FAQ
