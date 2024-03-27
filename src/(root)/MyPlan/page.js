import SmsLinks from '../../components/SmsLinks/SmsLinks'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import React from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';

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
                                <SmsLinks highlightedLink="/MyPlan" />
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
                                            <p>No Subscription — Pay for bundled credits as needed</p>
                                            <p className='sms_bold'>Change Plan</p>
                                            <p>Note: You will be charged the difference in your plan</p>
                                            <select name="" id="" className='sms_Credits_input'>
                                                <option value="" disabled selected>No Subscription - Pay for bundled credits as needed</option>
                                                <option value="" >d</option>
                                                <option value="" >d</option>
                                            </select>
                                            <button type='button' className='sms_button_outline'>Update</button>
                                        </div>

                                    </div>
                                    <div className="sms_area_bottom">
                                        <div className="sms_Credits_box">
                                            <p className='sms_bold'>Purchase One-Time Credit Bundle</p>
                                           
                                            <select name="" id="" className='sms_Credits_input'>
                                                <option value="" disabled selected>500 Credits - $24.95 One-time</option>
                                                <option value="" >d</option>
                                                <option value="" >d</option>
                                            </select>
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
