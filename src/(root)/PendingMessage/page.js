import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import React, { useState } from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';
import { BsCloudArrowDown } from "react-icons/bs";
import { IoBarChartOutline } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuBookTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";



const PendingMessage = () => {
    const [openStats, setOpenStats] = useState(null);

    // Sample backend data
    const demoDataFromBackend = [
        { id: 1, totalSent: 500, delivered: 480, notDelivered: 20, replied: 0 },
        { id: 2, totalSent: 700, delivered: 650, notDelivered: 50, replied: 1 },
        { id: 3, totalSent: 400, delivered: 380, notDelivered: 20, replied: 0 },
    ];

    const toggleStats = (key) => {
        setOpenStats(openStats === key ? null : key);
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
                                    <span className="link_name">Send AFM</span>
                                </a>
                            </li>
                            <li>
                                <a href="/PendingMessage">
                                    <BiMessageRoundedError className="yellow_m menu_dash_i" />
                                    <span className="link_name yellow_m">Pending Messages</span>
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
                                        <h3>SMS Campaigns: Pending/Sent Messages</h3>
                                        <div className="SMS_Dashboard_box">
                                            <div className="sms_keywords_warp sms-warp_black">
                                                <p className='sms_bold'>Pending</p>
                                                <table className='sms_keywords_table sm_key_table'>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Date/Time</th>
                                                            <th>Keyword</th>
                                                            <th>Total Contacts</th>
                                                            <th>Message</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>12/22/2025 - 1:34 PM PST</td>
                                                            <td>EVENT</td>
                                                            <td>456</td>
                                                            <td > Show full message preview here</td>
                                                        </tr>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>12/22/2025 - 1:34 PM PST</td>
                                                            <td>EVENT</td>
                                                            <td>456</td>
                                                            <td > Show full message preview here</td>
                                                        </tr>
                                                        <tr>
                                                            <td>X</td>
                                                            <td>12/22/2025 - 1:34 PM PST</td>
                                                            <td>EVENT</td>
                                                            <td>456</td>
                                                            <td > Show full message preview here</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className='text_pending'>IMPORTANT: On initial opt-in, a single, one-time legal message will be sent to each number which subscribes. That message credit will be deducted from your account balance and is required for legal compliance.</p>
                                            </div>
                                            <div className="sms_keywords_warp sms-warp_black">
                                                <p className='sms_bold'>Sent</p>
                                                <table className='sms_keywords_table sm_key_table'>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Date/Time</th>
                                                            <th>Keyword</th>
                                                            <th>Total Contacts</th>
                                                            <th>Message</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {demoDataFromBackend.map((data) => (
                                                            <React.Fragment key={data.id}>
                                                                <tr onClick={() => toggleStats(data.id)}>
                                                                    <td>X</td>
                                                                    <td>12/22/2025 - 1:34 PM PST</td>
                                                                    <td>EVENT</td>
                                                                    <td>456</td>
                                                                    <td>Show full message preview here</td>
                                                                    <td className='actions_i'>
                                                                        <BsCloudArrowDown className='action_i' />
                                                                        <IoBarChartOutline className='action_i' />
                                                                    </td>
                                                                </tr>
                                                                {openStats === data.id && (
                                                                    <tr>
                                                                        <td colSpan="6">
                                                                            <div  className='stats_summary' style={{
                                                                                opacity: openStats === data.id ? 1 : 0,
                                                                                height: openStats === data.id ? 'auto' : 0,
                                                                                transition: 'opacity 0.01s ease, height 0.3s ease'
                                                                            }}>
                                                                                <div className='stats_summary_warp'>
                                                                                    <h3 className='sms_bold'>Summary Stats</h3>
                                                                                    <div className='stats_content'>
                                                                                        <div className='stats_content-left'>
                                                                                            <p>Total Sent: {data.totalSent}</p>
                                                                                            <p>Delivered: {data.delivered}</p>
                                                                                            <p>Not Delivered: 24 (Click to export Contact list subset)</p>
                                                                                            <p>Replied: 0</p>
                                                                                            <p>Opt-outs: 2</p>
                                                                                            <p>Unknown: 0</p>
                                                                                        </div>
                                                                                        <div className='stats_content-right'>
                                                                                            <p>Tracing Link (if applicable):</p>
                                                                                            <div>
                                                                                                <p>Message link: https://examplelink.com</p>
                                                                                                <p>Total Clicks: 226</p>
                                                                                                <p>Unique Clicks: 124</p>
                                                                                                <p>Click Through Rate: 18%</p>

                                                                                            </div>
                                                                                            <p>Export contacts who clicked</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>

                                                                                        <button className='bulk_ac_btn' onClick={() => toggleStats(data.id)}>Close</button>
                                                                                    </div>
                                                                                </div>
                                                                                <HiXMark className='X_stats' onClick={() => toggleStats(data.id)} />



                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </React.Fragment>
                                                        ))}

                                                    </tbody>
                                                </table>
                                                {/* {demoDataFromBackend.map((data) => (
                                                    <div key={data.id} className='stats_summary' style={{
                                                        opacity: openStats === data.id ? 1 : 0,
                                                        height: openStats === data.id ? 'auto' : 0,
                                                        transition: 'opacity 0.01s ease, height 0.3s ease'
                                                    }}>
                                                        <div className='stats_summary_warp'>
                                                            <h3 className='sms_bold'>Summary Stats</h3>
                                                            <div className='stats_content'>
                                                                <div className='stats_content-left'>
                                                                    <p>Total Sent: {data.totalSent}</p>
                                                                    <p>Delivered: {data.delivered}</p>
                                                                    <p>Not Delivered: 24 (Click to export Contact list subset)</p>
                                                                    <p>Replied: 0</p>
                                                                    <p>Opt-outs: 2</p>
                                                                    <p>Unknown: 0</p>
                                                                </div>
                                                                <div className='stats_content-right'>
                                                                    <p>Tracing Link (if applicable):</p>
                                                                    <div>
                                                                        <p>Message link: https://examplelink.com</p>
                                                                        <p>Total Clicks: 226</p>
                                                                        <p>Unique Clicks: 124</p>
                                                                        <p>Click Through Rate: 18%</p>

                                                                    </div>
                                                                    <p>Export contacts who clicked</p>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <button className='bulk_ac_btn' onClick={() => toggleStats(data.id)}>Close</button>
                                                            </div>
                                                        </div>
                                                        <HiXMark className='X_stats' onClick={() => toggleStats(data.id)} />



                                                    </div>
                                                ))} */}
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

export default PendingMessage
