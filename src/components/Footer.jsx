import React from 'react'
import '../styles/Footer.css'
import FooterImg from '../assets/Footer.png'
import { FaPlus } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <div className='Footer_container'>
            <div className='Footer_Top'>
                <div className='Footer_Top_content'><img src={FooterImg} alt='Footer'/>
                </div>


                <div className='Footer_Top_Right'>
                    <div className='Footer_Top_Right_Button'>Schedule 1-on-1 Call Now</div>
                    <div className='Footer_Top_Right_content'>Speak with our Learning Advisor</div>
                </div>
            </div>


            <div className='Footer_Bottom'>

                <div>
                    <div className='Footer_Bootom_head'>Programs</div>
                    <div className='Footer_Bootom_li'>Data Science & AI <FaPlus style={{color: 'white'}}/>
                    </div>
                    <div className='Footer_Bootom_li'>Product Management <FaPlus style={{color: 'white'}}/>
                    </div>
                    <div className='Footer_Bootom_li'>Business Analytics<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Digital Transformation<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Business Management<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Project Management<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Strategy & Leadership<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Senior Management<FaPlus style={{color: 'white'}}/></div>
                    <div className='Footer_Bootom_li'>Fintech<FaPlus style={{color: 'white'}}/></div>
                </div>



                <div>
                <div className='Footer_Bootom_head'>Contact us</div>
                <div className='Footer_Bottom_para'>Email us (For Data Science Queries): admissions@accredian.com</div>
                <div className='Footer_Bottom_para'>Email us (For Product Management Queries):pm@accredian.com</div>
                <div className='Footer_Bottom_para'>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</div>
                <div className='Footer_Bottom_para'>Product Management Admission Helpline:+91 9625811095</div>
                <div className='Footer_Bottom_para'>Enrolled Student Helpline: +91 7969322507</div>
                <div className='Footer_Bottom_para'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
Haryana 122015</div>
                <div className='Footer_Bottom_para'>Why Accredian</div>
                <div className='Footer_Bottom_para'>Follow Us</div>
                </div>



                <div>
                <div className='Footer_Bootom_head'>Accredian</div>
                <div className='Footer_Bootom_li'>About</div>
                <div className='Footer_Bootom_li'>Career</div>
                <div className='Footer_Bootom_li'>Blog</div>
                <div className='Footer_Bootom_li'>Admission Policy</div>
                <div className='Footer_Bootom_li'>Referral Policy</div>
                <div className='Footer_Bootom_li'>Privacy Policy</div>
                <div className='Footer_Bootom_li'>Terms of Services</div>
                <div className='Footer_Bootom_li'>Master FAQs</div>

                </div>

            </div>



            <div className='Footer_Copyright'>
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>

        </div>

      
    </div>
  )
}

export default Footer
