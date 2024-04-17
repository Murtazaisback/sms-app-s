import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaCheck, FaRegUser } from 'react-icons/fa'
import RootLayout from '../layout.js';
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuLayoutTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import '../../(root)/SmsCampaigns/index.css'

import "../SmsCampaigns/index.css"

const Keywords = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
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
                        <LuWholeWord className=" menu_dash_i yellow_m" />
                        <span className="link_name yellow_m">Keywords</span>
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
                    <h3>SMS Campaigns: Keywords</h3>
                    <div className="SMS_Dashboard_box">
                      <div className="sms_keywords_warp">
                        <p className='sms_bold'>My Keywords</p>
                        <div className='sms_keywords_table'>
                          <thead>
                            <tr className='top_header'>
                              <th></th>
                              <th>Keyword</th>
                              <th>Associated Toll Free Number</th>
                              <th>Contact Count</th>
                              <th>Auto-Responder</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>X</td>
                              <td>Catchall</td>
                              <td>888-888-8888</td>
                              <td>456</td>
                              <td className='My_Keywords_bt'>
                                <a href='/AddKeyword' className='My_Keywords_bt'>

                                  <FaCheck style={{ color: "green" }} />Edit
                                </a>

                              </td>
                            </tr>
                          </tbody>
                        </div>
                        <div>
                          <a onClick={togglePopup} className='bulk_ac_btn'>Add Keyword </a>

                        </div>
                        <p>IMPORTANT: On initial opt-in, a single, one-time legal message will be sent to each number which subscribes. That message credit will be deducted from your account balance and is required for legal compliance.</p>
                      </div>

                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
          {showPopup && (
            <div className="popup_overlay2">
              <div className="popup_content3 sms_pop_sm">
                <p className='text_center add_keyword_cr'>Add Keyword</p>
                <form className='Paste_link'>
                  <input type="text" className="" placeholder='e.g. Events24' />
                  <div className='btn_warp'>

                  <button type="submit" className='btn' onClick={togglePopup} >Add</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

      </RootLayout>

    </>
  )
}

export default Keywords
