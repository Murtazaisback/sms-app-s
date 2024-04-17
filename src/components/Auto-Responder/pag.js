import React, { useState } from 'react';
import { HiXMark } from "react-icons/hi2";


const AutoResponder = ({ title,  }) => {
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // };

    const [showPopup, setShowPopup] = useState(false); // Initialize to true
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);


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

    return (
        <>
            <div className="sms_Credits_box">
                <h3>{title}</h3>
                <div className="sms_infos">
                    <p>Message:</p>
                    <p>160/160 Characters remaining</p>
                    <p>Tip: Make sure to add your business name to help recipients identify your business.</p>
                    {/* <textarea
                        name=""
                        id=""
                        placeholder='Type your message here'
                        value={inputValue}
                        onChange={handleInputChange}
                    ></textarea> */}

                    <div className="sms_infos_btns">
                        <p onClick={togglePopup}>Insert Link</p>
                        <p onClick={togglePopup2}>Apply Template</p>
                        <p onClick={togglePopup3}>Insert Unsubscribe <br /> Instructions</p>
                    </div>
                </div>
            </div>
            {showPopup && (
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
                         <div onClick={togglePopup} className='bulk_ac_btn'>Add Link</div>

                     </form>

                     <div onClick={togglePopup} className="close_popup"><HiXMark /></div>
                 </div>
             </div>
            )}
            {showPopup2 && (
                <div className="popup_overlay2">
                    <div className="popup_content3 sms_pop_sm">
                        <p className='text_center'>Select your Template</p>
                        <form className='Paste_link'>
                            <select>
                                <option value="" selected disabled>Select Your Template</option>
                                <option value="" >Your Template</option>
                                <option value="" >Your Template</option>
                            </select>
                            <button type="submit" className='btn' onClick={togglePopup2} >Apply</button>
                        </form>

                        <div onClick={togglePopup2} href='' className="close_popup"><HiXMark /></div>
                    </div>
                </div>
            )}
            {showPopup3 && (
                <div className="popup_overlay2">
                    <div className="popup_content3 sms_pop_sm">
                        <p className='text_center'>Insert Unsubscribe Instructions</p>
                        <form className='Paste_link'>
                            <input type="text" className="" placeholder='Insert Unsubscribe Instructions' />
                            <button type="submit" className='btn' onClick={togglePopup3} >Submit</button>
                        </form>

                        <div onClick={togglePopup3} href='' className="close_popup"><HiXMark /></div>
                    </div>
                </div>
            )}
        </>

    );
};

export default AutoResponder;
