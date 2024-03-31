import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, {useState} from 'react'
import { HiXMark } from "react-icons/hi2";
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';

const SendMessage = () => {
    const [showPopup, setShowPopup] = useState(true); // Initialize to true
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
                                <SmsLinks highlightedLink="/SendMessage" />
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="SMS_Dashboard_warp">
                                <h3>SMS Campaigns: Send Message</h3>
                                <div className="SMS_Dashboard_box_one">
                                    <div className="sms_area_left">
                                        <div className="sms_Credits_box">
                                            <div className="headings_trail">
                                                <h2>Sned a message (trial)</h2>
                                            </div>
                                            <p style={{textAlign: 'center'}}>Choose Contacts</p>
                                            <select name="" id="" className='sms_Credits_input'>
                                                <option value="" disabled selected>Select your contacts group</option>
                                                <option value="" >d</option>
                                                <option value="" >d</option>
                                            </select>
                                        </div>
                                        <div className="sms_Credits_box">
                                            <h3>Create Your Message</h3>
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
                                        </div>
                                        <div className="send_messages">
                                            <button className='sms_button'>Schedule Message</button>
                                            <button className='sms_button_outline'>Send Message</button>
                                        </div>

                                    </div>
                                    <div className="sms_area_right">
                                        <div className="area_right_btns">
                                            <div>
                                                <button className='sms_button'>Buy Credits</button>
                                            </div>
                                            <div>
                                                <button className='sms_button'>Upgrade Plan</button>
                                            </div>
                                        </div>
                                        <div className="prev_message">
                                            <h3>Message Preview</h3>
                                            <div className="prev_message_box">
                                                <input type="text" placeholder='Type your message here' />
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
                    <div className="popup_content sms_pop_sm">
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
                            <a onClick={togglePopup2}  className='bulk_ac_btn'>Schedule Send</a>
                        </form>
                        
                        <div onClick={togglePopup} href='' className="close_popup"><HiXMark /></div>
                    </div>
                </div>
            )}
            {showPopup2 && (
                <div className="popup_overlay">
                    <div className="popup_content sms_pop_sm">
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
                        <div onClick={togglePopup3}  className='bulk_ac_btn'>Add Link</div>

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
                        
                        <div onClick={togglePopup4}  className='bulk_ac_btn'>Send</div>
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

export default SendMessage
