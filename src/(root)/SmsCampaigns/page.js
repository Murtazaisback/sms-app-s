'use client'
import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, { useState } from 'react'
import "./index.css"
import RootLayout from '../layout.js';
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuLayoutTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";

const SmsCampaigns = () => {
    const [showPopup, setShowPopup] = useState(true); // Initialize to true
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    const [showPopup6, setShowPopup6] = useState(false);
    const [showPopup9, setShowPopup9] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
        setShowPopup(false);
    }

    const togglePopup3 = () => {
        setShowPopup3(!showPopup3);
        setShowPopup2(false);
    }

    const togglePopup4 = () => {
        setShowPopup4(!showPopup4);
        setShowPopup3(false);
    }

    const togglePopup5 = () => {
        setShowPopup5(!showPopup5);
        setShowPopup4(false);
    }

    const togglePopup6 = () => {
        setShowPopup6(!showPopup6);
    }
    const togglePopup9 = () => {
        setShowPopup9(!showPopup9);
        setShowPopup(false);
    }

    return (
        <>
        <RootLayout>
        <div className='main_container'>
            <div className="dashboard_main">
                <div className="dashboard_section">
                <div className="sidebar ">
                <ul className="nav-links">
                            <Silder_icon />
                            <li>
                                <a href="/SmsCampaigns">
                                <FaRegMessage className="yellow_m menu_dash_i" />

                                    <span className="link_name yellow_m">SMS CAMPAIGNS</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="/SendMessage">
                                        <AiOutlineMessage className=" menu_dash_i" />

                                        <span className="link_name ">Send Message</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href="/AfterMSG">
                                    <AiOutlineMessage className=" menu_dash_i" />
                                    <span className="link_name">Send AFM</span>
                                </a>
                            </li>
                            <li>
                                <a href="/PendingMessage">
                                    <BiMessageRoundedError className=" menu_dash_i" />
                                    <span className="link_name ">Pending Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="/MyPlan">
                                    <GrPlan className=" menu_dash_i" />
                                    <span className="link_name">My Plan</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="/Contacts">
                                        <IoIosContact className=" menu_dash_i" />
                                        <span className="link_name">Contacts</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="/inbox">
                                        <MdOutlineForwardToInbox  className=" menu_dash_i" />
                                        <span className="link_name">Inbox</span>
                                    </a>
                                </div>
                            </li>
                                <li>
                                    <div className="iocn-link">
                                        <a href="/Keywords">
                                            <LuWholeWord className=" menu_dash_i" />
                                            <span className="link_name">Keywords</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="iocn-link">
                                        <a href="/Tempelate">
                                            <LuLayoutTemplate className=" menu_dash_i" />
                                            <span className="link_name">Templates</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="iocn-link">
                                        <a href="/Settings">
                                            <GoGear className=" menu_dash_i" />
                                            <span className="link_name">Settings</span>
                                        </a>
                                    </div>
                                </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="SMS_Dashboard_warp">
                                <div className='sms_set_warp'>

                                <h3>SMS Campaigns Dashboard</h3>
                                <button onClick={togglePopup2} className='form_btn Wizard_btn'>Setup Wizard</button>
                                </div>
                                <div className="SMS_Dashboard_box_one">

                                    <div className="sms_area_left">
                                        <div className="sms_Credits_box">

                                            <p className='sms_bold'>Credits </p>
                                            <p>" " credits remaining of "total credits in plan"</p>
                                            <div className="progressBar_warp">
                                                <div className="progressOutline"></div>
                                                <div className="progress"></div>
                                            </div>
                                            <p>Rollover Credits: 351</p>
                                            <p>Refill Date: 01/23/2025</p>
                                        </div>
                                        <div className="Sms_btns">

                                            <button type='button' className='sms_button' onClick={togglePopup9}>Buy Credits</button>
                                            <a type='button' className='sms_button' href='/myplan'>Upgrade Plan</a>
                                            <a type='button' className='form_btn' href='sendmessage'>Send Message</a>
                                            {/* <div className='submit_text'> */}

                                            {/* </div> */}
                                        </div>
                                    </div>
                                    <div className="sms_area_right">
                                        <div className="Subscriber_Stats">
                                            <div className="stats_time">
                                                <p className='sms_bold'>Subscriber Stats </p>
                                                <p>Last 7 Days</p>
                                            </div>
                                            <p>Opt-ins: 8</p>
                                            <span><span className='purple_bg'>Opt-ins: 8</span></span>

                                            <span><span className="yellowBg">Total Subscribers: 102</span></span>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </div>
            {showPopup && (
                <div className="popup_overlay">
                    <div className="popup_content">
                        <h2>SMS Campaign Service Application</h2>
                        <div className="popup_content_info">
                            <p>Event Visionary works with U.S. based cell carriers only.
                                *All US Mobile Networks in the US prohibit any content related to: Payday loans, Short-term high-interest loans, Auto loans, Mortgage loans, Student loans, Gambling, Sweepstakes, Stock alerts, Cryptocurrency, Debt consolidation, Debt reduction, Credit repair programs, Deceptive work from home programs, Multi-level marketing, Work from home programs, Risk investment opportunities, Debt collection or consolidation, Cannabis (including thc and cbd), Alcohol, Tobacco or vape, phishing, Fraud or scams, Deceptive marketing, Pornography, Sex-related content, Profanity or hate speech, and Firearms.</p>
                        </div>
                        <p>To use this service, please fill out this short form with some details..</p>
                        <form action="" className='sms_form'>
                            <ol className='sms_ol'>
                                <li>
                                    <label htmlFor="">To your best estimation, please provide us with the approximate number of messages you intend to send each week.</label></li>
                                <div className='sms_input_box'>
                                    <select name="" id="" className='sms_select' >
                                        <option value="" selected disabled></option>
                                        <option value="">100</option>
                                        <option value="">200</option>
                                        <option value="">500</option>
                                        <option value="">1000</option>
                                        <option value="">2000</option>
                                        <option value="">3000</option>
                                        <option value="">5000</option>
                                        <option value="">10000</option>
                                        <option value="">more than 10,000</option>
                                    </select>
                                </div>
                                <li>
                                    <label htmlFor="" >Do you currently have a set of contacts you wish to move from a different service provider or business database?</label></li>
                            </ol>
                            <div className='sms_input_box'>
                                <select name="" id="" className='sms_select' >
                                    <option value="" selected disabled></option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className='sms_input_box'>

                                <label htmlFor="" className=''>a) If you answered ‘Yes’ to the previous question, do you, under penalty of perjury, claim to have acquired those contacts ethically, legally, and lawfully with the full consent of the recipients?</label> <br />
                                
                                {/* <button type='button' className='sms_input_btn'>Yes</button> */}
                                <select name="" id="" className='sms_select' >
                                    <option value="" selected disabled></option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className='sms_input_box2'>

                                <input type="checkbox" />
                                <label htmlFor="">I agree to the Terms of Service</label>
                            </div>
                            <div className='sms_input_box'>
                                <label htmlFor="">By agreeing to the terms of use, you agree to not abuse this service in any way that would result in cancellation of the service or your account.</label>
                            </div>
                            <div className='sms_p'>
                                <p>Once your application is submitted, we will assign your account a unique Toll Free Number (TFN) so that you can begin sending messages. </p>
                                <p>Note: There is a one-time setup fee of $10 in order to assign your account a unique TFN. There is also a monthly fee of $5 in order for you to keep this number active on your account.</p>
                            </div>
                            <div>
                                <p className='text_center'>Use my current payment method to pay the set-up fee and pay any recurring fees. You can change this later.</p>
                            </div>
                            <div className='submit_text'>
                                <button onClick={togglePopup} type='submit' className='form_btn'>Submit</button>

                            </div>

                        </form>
                    </div>
                </div>
            )}
            {showPopup2 && (
                <div className="popup_overlay">
                    <div className="popup_content">
                    <div className="w_effect_sm"></div>

                        <h2>SMS Campaigns Setup Wizard</h2>
                        <p>Congratulations! Your account was approved to run SMS Campaigns and your Toll Free Number has been assigned below.</p>
                        <p>Your Toll Free Number: (888) 888 - 8888</p>
                        <form action="" className='sms_form'>

                            <div className='sms_input_box_mt'>

                                <button type='button' className='sms_input_btn'>Yes</button><br />
                                <label htmlFor="" className=''>a) If you answered ‘Yes’ to the previous question, do you, under penalty of perjury, claim to have acquired those contacts ethically, legally, and lawfully with the full consent of the recipients?</label> <br />
                                <button type='button' className='sms_input_btn'>Yes</button>
                            </div>
                            <div className='sms_input_box2'>

                                <input type="checkbox" />
                                <label htmlFor="">I agree to the Terms of Service</label>
                            </div>
                            <div className='sms_input_box'>
                                <label htmlFor="">By agreeing to the terms of use, you agree to not abuse this service in any way that would result in cancellation of the service or your account.</label>
                            </div>
                            <div className='sms_p'>
                                <p>Once your application is submitted, we will assign your account a unique Toll Free Number (TFN) so that you can begin sending messages. </p>
                                <p>Note: There is a one-time setup fee of $10 in order to assign your account a unique TFN. There is also a monthly fee of $5 in order for you to keep this number active on your account.</p>
                            </div>
                            <div className='sms_input_box'>
                                <input type="checkbox" />
                                <label htmlFor="">Use my current payment method to pay the set-up fee and pay any recurring fees. You can change this later.</label>
                            </div>
                            <div className='submit_text'>
                                <button onClick={togglePopup3} type='submit' className='form_btn'>submit</button>

                            </div>

                        </form>
                    </div>
                </div>
            )}
            {showPopup3 && (
                <div className='popup_overlay'>
                    <div className='popup_content2'>
                        <h2 className='yellow_crr'>SMS Campaigns Setup Wizard</h2>
                        <p>Congratulations! </p>
                        <p>Your account was approved to run SMS Campaigns and your Toll Free Number has been assigned below.</p>
                        <h3>Your Toll Free Number: (888) 888 - 8888</h3>
                        <p>Step 1: </p>

                        <p>Please select a plan below to get started.</p>

                        {/* <input type="text" placeholder='No Subscription - Pay for bundled credits as needed' /> */}
                        <select>
                            <option disabled selected>No Subscription - Pay for bundled credits as needed</option>
                            <option >No Subscription</option>
                            <option >Subscription</option>
                        </select>
                        <div>

                            <button type='button' className='btn' onClick={togglePopup4}>Next</button>
                        </div>


                    </div>

                </div>
            )}
            {showPopup4 && (
                <div className='popup_overlay'>
                    <div className='popup_content2'>
                        <h2 className='yellow_crr'>SMS Campaigns Setup Wizard</h2>
                        <p>Step 2: </p>

                        <p>Create your first Keyword. Keywords are used in order to capture contacts and to create an ongoing contact list.</p>

                        <input type="text" placeholder='Type your Keyword here' />
                        <div>

                            <button type='button' className='btn' onClick={togglePopup5}>Next</button>
                        </div>


                    </div>

                </div>
            )}
            {showPopup5 && (
                <div className='popup_overlay'>
                    <div className='popup_content2'>
                        <h2 className='yellow_crr'>SMS Campaigns Setup Wizard</h2>
                        <p>Step 3: </p>

                        <p>Share your keyword with one of the options below:</p>
                        <div className='pop_invite'>
                            <p>Invite customers to join via: </p>
                            <div className='pop_inul'>
                            <ul>
                                <li>A post caption on social media</li>
                                <li>a banner on your website</li>
                                <li>A flyer for a special event or occasion</li>
                            </ul>
                            </div>
                            <p>Copy and Paste the invitation below (or create a similar one):</p>
                        </div>
                        
                        <div className='popup-text'>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div>

                            <button type='button'className='btn' onClick={togglePopup5}>Next</button>
                        </div>


                    </div>

                </div>
            )}
              {showPopup9 && (
                        <div className="popup_overlay2">
                            <div className="popup_content3 sms_pop_sm">
                                <div className="sms_Credits_box2 sms_box_p">
                                    <p className='sms_bold'>Purchase One-Time Credit Bundle</p>
                                    <p>Choose from the options below:</p>

                                    <select name="" id="" className='sms_Credits_input'>
                                        <option value="" selected>500 Credits - $24.95 One-time</option>
                                        <option value="" >1000 Credits - $39.95 One-time</option>
                                        <option value="" >1500 Credits - $54.95 One-time</option>
                                        <option value="" >2000 Credits - $69.95 One-time</option>
                                        <option value="" >2500 Credits - $79.95 One-time</option>
                                        <option value="" >5000 Credits - $129.95 One-time</option>
                                        <option value="" >10000 Credits - $199.95 One-time</option>
                                    </select>
                                    <p>These credits will be added to your existing balance.</p>
                                    <button type='button' className='sms_button_outline' onClick={togglePopup9}>Buy</button>
                                </div>


                                <div onClick={togglePopup9} className="close_popup"><HiXMark /></div>
                            </div>
                        </div>
                    )}
        </div>
        </RootLayout>
      </>
    )
}

export default SmsCampaigns
