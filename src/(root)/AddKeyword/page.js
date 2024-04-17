'use client'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, { useState } from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';
import { HiXMark } from "react-icons/hi2";
import SmLinks from '../../components/SmLinks/page.js';
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuLayoutTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";





const AddKeyword = ({   }) => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleMsgClick = (index) => {
        setSelectedMessage(selectedMessage === index ? null : index);
    };
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    const insertUnsubscribe = () => {
        setInputValue(inputValue + 'Replay STOP to cancel');
      };
    const [showPopup5, setShowPopup5] = useState(false);
    const [showPopup6, setShowPopup6] = useState(false);
    const [showPopup7, setShowPopup7] = useState(false);

    const togglePopup6 = () => {
        setShowPopup6(!showPopup6);
    }
    const togglePopup5 = () => {
        setShowPopup5(!showPopup5);
        // setShowPopup4(false);
    }
    const togglePopup7 = () => {
        setShowPopup7(!showPopup7);
        // setShowPopup4(false);
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
                                    <span className="link_name">Pending Messages</span>
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
                        {/* <SmLinks/> */}
                            </div>
                            <section className="home-section">
                                <div className="home-content">
                                    <div className="SMS_Dashboard_warp">
                                        <h3>Keyword: KEYWORD </h3>
                                        <div className="SMS_Dashboard_box">
                                            <div className="sms_area_top">
                                                <div className="sms_area_warp">
                                                    <div className="Responder">
                                                        {/* <div className="sms_Credits_box">
                                            <h3>Edit Auto-Responder</h3>
                                            <div className="sms_infos">
                                                <p>Message:</p>
                                                <p>160/160 Characters remaining</p>
                                                <p>Tip: Make sure to add your business name to help recipients identify your business.</p>
                                                <textarea name="" id="" placeholder='Type your message here' ></textarea>
                                                <div className="sms_infos_btns">
                                                    <p>Insert Link</p>
                                                    <p>Apply Template</p>
                                                    <p>Insert Unsubscribe <br /> Instructions</p>
                                                </div>
                                            </div>
                                        </div> */}
                                                        {/* <AutoResponder title="Edit Auto-Responder" /> */}
                                                        <div className="sms_Credits_box">
                                                    <h3>Edit Auto-Responder</h3>
                                                    <div className="sms_infos">
                                                        <p>Message:</p>
                                                        <p>160/160 Characters remaining</p>
                                                        <p>Tip: Make sure to add your business name to help recipients identify your business.</p>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            placeholder='Type your message here'
                                                            value={inputValue}
                                                            onChange={handleInputChange}
                                                        ></textarea>

                                                        <div className="sms_infos_btns">
                                                            <p onClick={togglePopup5}>Insert Link</p>
                                                            <p onClick={togglePopup6}>Apply Template</p>
                                                            <p onClick={insertUnsubscribe}>Insert Unsubscribe <br /> Instructions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                    </div>
                                                    <div className="prev_message_warp">

                                                        <div className="prev_message">
                                                            <h3>Message Preview</h3>
                                                            <div className="prev_message_box">
                                                                {/* <input type="text" placeholder='Type your message here' /> */}
                                                                <textarea
                                                                    name=""
                                                                    id=""
                                                                    placeholder='Type your message here'
                                                                    value={inputValue}
                                                                    onChange={handleInputChange}
                                                                    disabled
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="sms_area_bottom">
                                                <div className="sms_area_bottom_warp">
                                                    <p className='text_center'>Important Note</p>
                                                    <p>On initial opt-in, a single, one-time legal message will be sent to each number which subscribes. That message credit will be deducted from your account balance and is required for legal compliance.</p>
                                                </div>
                                            </div>
                                            <div className="sms_right_btns">
                                                <a href="">Cancel</a>
                                                <a href="" className='bulk_ac_btn'>Save Changes</a>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </section>
                        </div>
                    </div>





                    {showPopup5 && (
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
                             <label>Choose this option to use a link shortener to reduce the character count ithat your link uses up. </label>
                         </div>
                         <div onClick={togglePopup5} className='bulk_ac_btn'>Add Link</div>

                     </form>

                     <div onClick={togglePopup5} className="close_popup"><HiXMark /></div>
                 </div>
             </div>
            )}
            {showPopup6 && (
                <div className="popup_overlay2">
                    <div className="popup_content3 sms_pop_sm">
                        <p className='text_center'>Select your Template</p>
                        <form className='Paste_link'>
                            <select>
                                <option value="" selected disabled>Select Your Template</option>
                                <option value="" >Your Template</option>
                                <option value="" >Your Template</option>
                            </select>
                            <button type="submit" className='btn' onClick={togglePopup6} >Apply</button>
                        </form>

                        <div onClick={togglePopup6} href='' className="close_popup"><HiXMark /></div>
                    </div>
                </div>
            )}
                </div>


            </RootLayout>

        </>
    )
}

export default AddKeyword
