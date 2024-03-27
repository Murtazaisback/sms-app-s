'use client'
import SmsLinks from '../../components/SmsLinks/SmsLinks.js'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus.js'
// import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import "./index.css"
import RootLayout from '../layout.js';

const SmsSign = () => {


    return (
        <>
            <RootLayout>
                <div className='main_container'>
                    <div className="Sms_sign">
                        <div className='Sms_sign_right'>
                            <h2 className='yellow_crr'>FREE TRIAL</h2>
                            <p className='yellow_crr'>12 Credits</p>
                            <div className='sms_p_box'>
                                <p>Event Visionary works with U.S. based cell carriers only.</p>
                                <p>*All US Mobile Networks in the US prohibit any content related to: Payday loans, Short-term high-interest loans, Auto loans, Mortgage loans, Student loans, Gambling, Sweepstakes, Stock alerts, Cryptocurrency, Debt consolidation, Debt reduction, Credit repair programs, Deceptive work from home programs, Multi-level marketing, Work from home programs, Risk investment opportunities, Debt collection or consolidation, Cannabis (including thc and cbd), Alcohol, Tobacco or vape, phishing, Fraud or scams, Deceptive marketing, Pornography, Sex-related content, Profanity or hate speech, and Firearms.</p>
                            </div>
                        </div>
                        <div className='Sms_sign_left'>
                            <h2 className='yellow_crr'>Sign Up</h2>
                            <form className='Sms_form'>
                                <div className='Sms_inputs'>
                                    <div className='Sms_input'>
                                        <label>Name</label>
                                        <input type='text' required />
                                    </div>
                                    <div className='Sms_input'>
                                        <label>Business Name</label>
                                        <input type='text'required />
                                    </div>
                                </div>
                                <div className='Sms_inputs'>
                                    <div className='Sms_input'>
                                        <label>Business Category</label>
                                        <input type='text'required />
                                    </div>
                                    <div className='Sms_input'>
                                        <label>Business Type</label>
                                        <input type='text'required />
                                    </div>
                                </div>
                                <div className='Sms_inputs'>
                                    <div className='Sms_input'>
                                        <label>Email: </label>
                                        <input type='email'required />
                                    </div>
                                    <div className='Sms_input'>
                                        <label>Mobile Phone (Optional):</label>
                                        <input type='number' />
                                    </div>
                                </div>
                                <div className='Sms_inputs'>
                                    <div className='Sms_input'>
                                        <label>Password:</label>
                                        <input type='password' required />
                                    </div>
                                    <div className='Sms_input'>
                                        <label>Confirm Password:</label>
                                        <input type='password' required />
                                    </div>
                                </div>
                                <div className='check_sms'>
                                    <input type='checkbox' />
                                    <p>I agree to the Terms of Service</p>
                                </div>
                                <div>

                                <button href='/' className='btn' type='submit'>Sign Up</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>

            </RootLayout>

        </>
    )
}

export default SmsSign
