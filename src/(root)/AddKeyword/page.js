'use client'
import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, { useState } from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';


const AddKeyword = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleMsgClick = (index) => {
        setSelectedMessage(selectedMessage === index ? null : index);
    };
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
                                <SmsLinks highlightedLink="/Keywords" />
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="SMS_Dashboard_warp">
                                <h3>Keyword: KEYWORD </h3>
                                <div className="SMS_Dashboard_box">
                                <div className="sms_area_top">
                                    <div className="sms_area_warp">
                                        <div className="Responder">
                                        <div className="sms_Credits_box">
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
                                        </div>
                                        </div>
                                        <div className="prev_message_warp">

                                        <div className="prev_message">
                                            <h3>Message Preview</h3>
                                            <div className="prev_message_box">
                                                <input type="text" placeholder='Type your message here' />
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
        </div>


</RootLayout>

        </>
    )
}

export default AddKeyword
