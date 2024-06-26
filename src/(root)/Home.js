'use client'
import React, { useEffect, useState, useRef } from 'react';
import Img from 'react-image';
import { Dawn_img, Ellispse, Landingmain } from '../public/index.js'
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCards from '../components/ServiceCards/ServiceCards.js';
import useScrollRotate from '../Hooks/useScrollRotate.js';
import SilderImages from '../components/SilderImages/SilderImages.js'
import './index.css'
import RootLayout from './layout.js';


const Home = () => {
    const rotation = useScrollRotate();
  
    const [ref1, inView1] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const [ref2, inView2] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const [ref3, inView3] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    return (
      <>
      <RootLayout>
        <main>


        <section className='main_header_section' >
          <div
            className="header_section"
          >
            <h1 >Event. Planning. <br /> Genius.</h1>
            <div className="header_box">
              <div className="header_info">
                <p >Create an account for FREE </p>
                <div>
                  <a href="/Sign_Up" className="btn" >Sign Up</a>
                </div>
                <div
                  className='Hero_imgs pc_none'
                >
                  <div className="wapper_Hero_imgs">
  
                    <img src={Landingmain} alt='' className='Hero_img' />
  
                    <img src={Ellispse} alt="" className='back_hero_img' style={{ transform: `rotate(${rotation}deg)` }} />
                  </div>
                </div>
  
                <div className="header_text" >
                  <p className="yellow_cr">We’re the All-in-One Platform you’ve been waiting for.</p>
                  <p className="mb">Plus. No monthly or annual fees. </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='Hero_imgs res_none'
          >
            <div className="wapper_Hero_imgs">
  
              <img src={Landingmain} alt='' className='Hero_img' />
  
              <img src={Ellispse} alt="" className='back_hero_img' style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
          </div>
  
  
        </section>
  
  
        <div className='main_container'>
          <div
          >
  
            <div className={`service_cards_section`}>
  
              <h1>Do more. On One Platform</h1>
              <ServiceCards />
            </div>
          </div>
  
          <div className="show_section">
            <div className="mid_effect"></div>
            {/* <h2 className='show_title'>TAKE OFF YOUR EVENTS</h2> */}
            <div className="show_container">
  
              <SilderImages />
  
  
  
              <div
                className='info_imagse_box'
              >
                <div className="show_info" >
                  <h2 className=''>Create your events with ease.</h2>
                  <p>Need reserved seating for <br />your event? Not a <br />problem.</p>
                  <p>Use our built-in designer to <br /> customize your seating chart and  <br /> allow customers to select their<br />seats at checkout</p>
                </div>
              </div>
            </div>
          </div>
          <div
          >
  
            <div className="table_section">
              <div className="table_container" >
                <table>
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th>Event Visionary</th>
                      <th className="tc">Eventbrite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create and List Events</td>
  
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                    </tr>
                    <tr>
                      <td>Sell Tickets</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                    </tr>
                    <tr>
                      <td>Run SMS Campaigns</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaXmark className="small_icon red" /></td>
                    </tr>
                    <tr>
                      <td>Easily create custom dynamic seating charts</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaXmark className="small_icon red" /></td>
                    </tr>
                    <tr>
                      <td>Manage Orders</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                    </tr>
                    <tr>
                      <td>Manage Attendees</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                    </tr>
                    <tr>
                      <td>We Pledge Not to Cancel Your Events</td>
                      <td className="tc"><FaCheck className="small_icon green" /></td>
                      <td className="tc"><FaXmark className="small_icon red" /></td>  
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='about_main_box'>
            <div className='about_info_main'>
              <h3>More Awesome Tools Coming Soon</h3>
              <ul>
                <li>Global Event Analytics to help estimate number of ticket sales, recommended ticket prices, and more</li>
                <li>SMS Campaigns</li>
              </ul>
  
            </div>
            <img className='about_img_main' src={Dawn_img} alt=''/>
  
          </div>
  
  
  
  
  
  
        </div>
  
      </main>
      </RootLayout>
      </>
    )
  };
  
  export default Home;