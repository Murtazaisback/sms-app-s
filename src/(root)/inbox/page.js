'use client'
import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, { useState } from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';


const Inbox = () => {
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
                                <SmsLinks highlightedLink="/inbox" />
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                            <div className="SMS_Dashboard_warp">
                                <h3>SMS Campaigns Dashboard</h3>
                                <div className="SMS_Dashboard_box_one">
                                    <div className="sms_area_left">
                                        <div className="sms_left_warp">
                                            <div className="sms_left_head">Message Preview</div>
                                            <div className="inbox_header">
                                                <p>Sort by:</p>
                                                <p>Date</p>
                                                <p>Keyword</p>
                                            </div>
                                            <div className="inbox_msgs">
                                                {Array.from({ length: 4 }, (_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`inbox_msg ${selectedMessage === index ? 'selected' : ''}`}
                                                        onClick={() => handleMsgClick(index)}
                                                    >
                                                        <p>John Math</p>
                                                        <p>+123222222</p>
                                                        <p>new opt-in for events from +19512439753 </p>
                                                        <p>message: Yes</p>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`sms_area_inbox ${selectedMessage === null ? 'display-flex' : 'display-none'}`}>
                                        <p className='none_msg_select'>
                                            Select a message to view it here
                                        </p>

                                    </div>
                                    <div className={`sms_left_righ ${selectedMessage !== null ? 'display-flex' : 'display-none'}`}>
                                        <div className="sms_left_head">Conversation with <p> Fist and last</p></div>
                                        <div className="inbox_dm"></div>
                                        <div className="inbox_box_ms">
                                            <div className="first_dm">
                                                <p>new opt-in for events from +19512439753 message: Yes</p>
                                            </div>
                                            <div className="send_inp">
                                                <input type="text" placeholder='Respond to this message here...' />
                                                <button type='submit' className='bulk_ac_btn' >Reply</button>
                                            </div>
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

export default Inbox
