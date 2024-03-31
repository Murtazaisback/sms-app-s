import SmsLinks from '../../components/SmsLinks/SmsLinks.js'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus.js'
import React, { useState } from 'react'
import '../SmsCampaigns/index.css'
import RootLayout from '../layout.js';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";





const Tempelate = () => {

    const [openStats, setOpenStats] = useState(null);
    const [rows, setRows] = useState([
        { id: 1, event: 'EVENT', name: 'Sample Name 1', preview: 'Show full message preview here', isEditing: false },
        { id: 2, event: 'EVENT', name: 'Sample Name 1', preview: 'Show full message preview here', isEditing: false },
        { id: 3, event: 'EVENT', name: 'Sample Name 1', preview: 'Show full message preview here', isEditing: false },
        // Add more initial rows as needed
    ]);
    const handleDeleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const handleEditRow = (id) => {
        setRows(
            rows.map(row =>
                row.id === id ? { ...row, isEditing: true } : { ...row, isEditing: false }
            )
        );
    };

    const handleSaveEdit = (id) => {
        setRows(
            rows.map(row =>
                row.id === id ? { ...row, isEditing: false } : row
            )
        );
    };

    const toggleStats = (key) => {
        setOpenStats(openStats === key ? null : key);
    };

    const handleInputChange = (event, id, key) => {
        const { value } = event.target;
        setRows(
            rows.map(row =>
                row.id === id ? { ...row, [key]: value } : row
            )
        );
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
                                        <SmsLinks highlightedLink="/Tempelate" />
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
                                                            <th>Keyword</th>
                                                            <th>Template Name</th>
                                                            <th>Message Preview</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {rows.map(row => (
                                                         <tr key={row.id}>
                                                         <td>{row.isEditing ? <input type="text" value={row.event} onChange={(e) => handleInputChange(e, row.id, 'event')} className="editing_in" /> : row.event}</td>
                                                         <td>{row.isEditing ? <input type="text" value={row.name} onChange={(e) => handleInputChange(e, row.id, 'name')} className="editing_in" /> : row.name}</td>
                                                         <td>{row.isEditing ? <input type="text" value={row.preview} onChange={(e) => handleInputChange(e, row.id, 'preview')} className="editing_in" /> : row.preview}</td>
                                                         <td className='actions_i'>
                                                             {row.isEditing ? (
                                                                 <>
                                                                     <FaRegListAlt className='action_i' onClick={() => handleSaveEdit(row.id)} />
                                                                     <FaRegTrashCan className='action_i' onClick={() => handleDeleteRow(row.id)} />
                                                                 </>
                                                             ) : (
                                                                 <>
                                                                
                                                                <FaRegListAlt className='action_i' onClick={() => handleEditRow(row.id)} />
                                                                 <FaRegTrashCan className='action_i' onClick={() => handleDeleteRow(row.id)} />
                                                                </>
                                                             )}
                                                         </td>
                                                     </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
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

export default Tempelate
