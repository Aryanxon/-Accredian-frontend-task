import React from 'react'
import '../styles/Benifits.css'
import { IoIosArrowForward } from "react-icons/io";

function Benifits() {
  return (
    <div>
        <div className='Benefit_Container'>

            <div className='Benefit_Head'>
            What Are The <span style={{color: 'rgba(26, 115, 232, 1)'}}>Referral Benefits?</span> 
            </div>



            <div className='Benefit_main'>

                <div className='Benefit_main_left'>

                    <ul className='Benefit_main_left_contianer'>
                        <li>ALL Programs <IoIosArrowForward /></li>
                        <li>PRODUCT MANAGEMENT <IoIosArrowForward />
                        </li>
                        <li>STRATEGY & LEADERSHIP <IoIosArrowForward />
                        </li>
                        <li>BUSINESS MANAGEMENT <IoIosArrowForward />
                        </li>
                        <li>FINTECH <IoIosArrowForward />
                        </li>
                        <li>SENIOR MANAGEMENT <IoIosArrowForward />
                        </li>
                        <li>DATA SCIENCE <IoIosArrowForward />
                        </li>
                        <li>DIGITAL TRANSFORMATION <IoIosArrowForward />
                        </li>
                        <li>BUSINESS ANALYTICS <IoIosArrowForward />
                        </li>
                    </ul>

                </div>


                <div >

                    <table className='Benefit_main_right'>
                        <thead className='Benefit_main_right_THead'>
                            <th>Programs</th>
                            <th>Referrer Bonus</th>
                            <th>Refree Bonus</th>
                        </thead>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                            <tbody className='Benefit_main_right_BHead'>
                                <tr>Professional Certificate Program in Product Management</tr>
                                <tr>₹ 7,000</tr>
                                <tr>₹ 9,000</tr>
                            </tbody>
                    </table>

                </div>



            </div>



            <div className='Benifit_button'>
            Refer Now

            </div>



        </div>
      
    </div>
  )
}

export default Benifits
