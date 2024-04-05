import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import React from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuBookTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";

const MyPlan = () => {
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
                                            <FaRegMessage className=" menu_dash_i" />

                                            <span className="link_name ">SMS CAMPAIGNS</span>
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
                                            <span className="link_name ">Send AFM</span>
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
                                            <span className="link_name yellow_m">My Plan</span>
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
                                                <MdOutlineForwardToInbox className=" menu_dash_i" />
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
                                                <LuBookTemplate className=" menu_dash_i" />
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
                                        <h3>SMS Campaigns: My Plan</h3>
                                        <div className="SMS_Dashboard_box">
                                            <div className="sms_area_top">
                                                <div className="sms_Credits_box">
                                                    <p className='sms_bold'>My Plan</p>
                                                    <p>[Display Plan Here]</p>
                                                    <p className='sms_bold'>Change Plan</p>
                                                    <p className='sm_p'>Note: You will be charged the difference in your plan</p>
                                                    <select name="" id="" className='sms_Credits_input'>
                                                        <option value="" disabled selected>No Subscription - Pay for bundled credits as needed</option>
                                                        <option value="" >500 Credits - $18.49/month</option>
                                                        <option value="" >1000 Credits - $29.95/month</option>
                                                        <option value="" >1500 Credits - $44.95/month</option>
                                                        <option value="" >2000 Credits - $54.95/month</option>
                                                        <option value="" >2500 Credits - $59.95/month</option>
                                                        <option value="" >5000 Credits - $99.95/month</option>
                                                        <option value="" >10000 Credits - $199.95/month</option>
                                                    </select>
                                                    <button type='button' className='sms_button_outline'>Update</button>
                                                </div>

                                            </div>
                                            <div className="sms_area_bottom">
                                                <div className="sms_Credits_box sms_box_p">
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
                                                    <button type='button' className='sms_button_outline'>Update</button>
                                                </div>
                                                <div className="sms_Credits_box">
                                                    <p className='sms_bold'>Payment Method</p>

                                                    <div className="sms_pay">
                                                        <p>Card ending in 4242</p>
                                                        <p>Edit</p>
                                                    </div>
                                                    <button type='button' className='sms_button_outline'>Use a different payment method</button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </RootLayout>
        </>
    )
}

export default MyPlan
