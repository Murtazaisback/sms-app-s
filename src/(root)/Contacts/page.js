'use client'
import React, { useState } from 'react'
import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import '../SmsCampaigns/index.css'
// import Image from 'next/image'
import { Contact_sms_img } from '../../public'
import { HiXMark } from "react-icons/hi2";
import RootLayout from '../layout.js';
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuLayoutTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";


const Contacts = () => {
    const [showPopup, setShowPopup] = useState(false); // Initialize to true
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);
    const [showPopup5, setShowPopup5] = useState(false);
    const [showPopup6, setShowPopup6] = useState(false);

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
    const togglePopup6 = () => {
        setShowPopup6(!showPopup6);
    }
    const togglePopup5 = () => {
        setShowPopup5(!showPopup5);
        setShowPopup4(false);
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
                                            <span className="link_name ">My Plan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="iocn-link">
                                            <a href="/Contacts">
                                                <IoIosContact className=" menu_dash_i yellow_m" />
                                                <span className="link_name yellow_m">Contacts</span>
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
                                        <h3>SMS Campaigns: Contacts</h3>
                                        <div className="SMS_Dashboard_box">
                                            <div className="sms_box_top">
                                                <div className="sms_Credits_box">
                                                    <p className='sms_heading'>Search</p>
                                                    <form action="" className='Contact_t_form'>
                                                        <div className="label_sms_b">
                                                            <label htmlFor="">By Keyword</label>
                                                            <select name="" id="">
                                                                <option value="" selected disabled></option>
                                                                <option value="">f</option>
                                                                <option value="">g</option>
                                                            </select>
                                                        </div>
                                                        <div className="label_sms_b">
                                                            <label htmlFor="">By Number</label>
                                                            <input type="number" />
                                                        </div>
                                                        <div className="label_sms_b">
                                                            <label htmlFor="">By Name</label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className="label_sms_b">
                                                            <label htmlFor="">By Date Added</label>
                                                            <input type="date" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="sms_box_middle">
                                                <div className="sms_Credits_box">
                                                    <p className='sms_heading'>Contact List</p>
                                                    <form className="bulk_ac bluk_seles">
                                                        <label htmlFor="">Bulk Action:</label>
                                                        <select name="" id="">
                                                            <option value="" disabled>Select </option>
                                                            <option value="" >Select </option>
                                                            <option value="" >Select </option>
                                                        </select>
                                                        <button type="submit" className='bulk_ac_btn'>Go</button>
                                                    </form>
                                                    <div className='select_opt'>
                                                        <div className="selection_header">
                                                            <label htmlFor="">Select All</label>
                                                            <label htmlFor="">Phone</label>
                                                            <label htmlFor="">Name</label>
                                                            <label htmlFor="">Date Added</label>
                                                        </div>
                                                        <div className="selection_body">
                                                            <input type="checkbox" />
                                                            <label htmlFor="">+13231111111</label>
                                                            <label htmlFor="">First Last</label>
                                                            <label htmlFor="">09/01/2023</label>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="sms_box_bottom">
                                                <div className="sms_Credits_box">
                                                    <p className='sms_heading'>Upload Contacts</p>
                                                    <div className="flexed_info">
                                                        <div className="contact_text_sms">
                                                            <p>Uploading contacts is only meant to be used when switching providers. You may drag and drop a .csv file here, but this is not to be abused. </p>
                                                            <p>If your account shows signs of abuse (i.e. a high number of blocks and/or opt-outs. Your account will be closed permanently and you will no longer be allowed to use our service. Please reach out to us directly at support@eventvisionary.com should you have any questions.</p>
                                                            <p>Note: Your CSV file must have 3 columns in this order: phone, first name, last name.</p>
                                                        </div>
                                                        <div className="contact_sms_img">
                                                            <img src={Contact_sms_img} alt="" />
                                                        </div>
                                                    </div>


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
                            <div className="popup_content2 sms_pop_sm">
                                <p className='p_content'>Your message will be automatically sent at the date and time you enter below</p>
                                <form action="" className='pop_up_1_box'>
                                    <div className="form_input_sms">
                                        <label htmlFor="">Date</label>
                                        <input type="date" />
                                    </div>
                                    <div className="form_input_sms">
                                        <label htmlFor="">Date</label>
                                        <input type="time" />
                                    </div>
                                    <a onClick={togglePopup2} className='bulk_ac_btn'>Schedule Send</a>
                                </form>

                                <div onClick={togglePopup} href='' className="close_popup"><HiXMark /></div>
                            </div>
                        </div>
                    )}
                    {showPopup2 && (
                        <div className="popup_overlay">
                            <div className="popup_content2 sms_pop_sm">
                                <p className='p_content'>Add a Link to Your Message </p>
                                <form action="" className='Message_sms_pop'>
                                    <div className="inp_sms_pop">
                                        <label htmlFor="">Insert your link below (Note: ALL links must begin with “https”):</label>
                                        <input type="text" />
                                    </div>
                                    <div className="inp_sms_check">
                                        <input type="checkbox" />
                                        <label>Choose this option to use a link shortener to reduce the characters count of your link. </label>
                                    </div>
                                    <div onClick={togglePopup3} className='bulk_ac_btn'>Add Link</div>

                                </form>

                                <div onClick={togglePopup2} className="close_popup"><HiXMark /></div>
                            </div>
                        </div>
                    )}
                    {showPopup3 && (
                        <div className="popup_overlay">
                            <div className="popup_content sms_pop_sm">
                                <p className='p_content'>Please confirm that you want to send this message.</p>
                                <div className="pop_text_cent">

                                    <p>Note: This will use { } of your total remaining credits.</p>

                                    <div onClick={togglePopup4} className='bulk_ac_btn'>Send</div>
                                </div>

                                <div onClick={togglePopup3} className="close_popup"><HiXMark /></div>
                            </div>
                        </div>
                    )}
                    {showPopup4 && (
                        <div className="popup_overlay">
                            <div className="popup_content sms_pop_md">
                                <p className='p_content'>Apply Template</p>
                                <div className="my_temp">
                                    <div className="temp_header">
                                        <p>My Templates</p>
                                        <p>Preview</p>
                                    </div>
                                    <div className="temp_body">
                                        <div className="temp_select_row">
                                            <p>TemplateName</p>
                                            <p>Preview first 20 char...</p>
                                            <div className='bulk_ac_btn'>Apply</div>
                                        </div>
                                        <div className="temp_select_row">
                                            <p>TemplateName</p>
                                            <p>Preview first 20 char...</p>
                                            <div className='bulk_ac_btn'>Apply</div>
                                        </div>
                                        <div className="temp_select_row">
                                            <p>TemplateName</p>
                                            <p>Preview first 20 char...</p>
                                            <div className='bulk_ac_btn'>Apply</div>
                                        </div>
                                    </div>
                                </div>

                                <div onClick={togglePopup4} className="close_popup"><HiXMark /></div>
                            </div>
                        </div>
                    )}
                </div>
            </RootLayout>

        </>
    )
}

export default Contacts
