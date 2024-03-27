import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaCheck, FaRegUser } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import RootLayout from '../layout.js';

import "../SmsCampaigns/index.css"

const Keywords = () => {
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
                <h3>SMS Campaigns: Keywords</h3>
                <div className="SMS_Dashboard_box">
                  <div className="sms_keywords_warp">
                    <p className='sms_bold'>My Keywords</p>
                    <table className='sms_keywords_table'>
                      <thead>
                        <tr>
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
                          <td className='My_Keywords_bt'> <FaCheck style={{ color: "green" }} />Edit</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <a href='/AddKeyword' className='bulk_ac_btn'>Add Keyword </a>

                    </div>
                    <p>IMPORTANT: On initial opt-in, a single, one-time legal message will be sent to each number which subscribes. That message credit will be deducted from your account balance and is required for legal compliance.</p>
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

export default Keywords
