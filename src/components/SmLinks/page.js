import React from 'react';
import { useLocation } from 'react-router-dom';
// import { FaRegMessage, AiOutlineMessage, BiMessageRoundedError, GrPlan, IoIosContact, MdOutlineForwardToInbox, GoGear, LuWholeWord, LuBookTemplate } from 'react-icons/all'; // Import all your icons
import AutoResponder from "../../components/Auto-Responder/pag.js"
import { FaChevronDown, FaRegMessage } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageRoundedError } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuWholeWord, LuBookTemplate } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import '../../(root)/SmsCampaigns/index.css'

const SmLinks = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "yellow_m" : "";
  };

  return (
    <ul className="nav-links">
      <a to="/SmsCampaigns" className={isActive("/SmsCampaigns")}>
        <FaRegMessage className={`menu_dash_i ${isActive("/SmsCampaigns")}`} />
        <span className={`link_name ${isActive("/SmsCampaigns")}`}>SMS CAMPAIGNS</span>
      </a>
      <a to="/SendMessage" className={isActive("/SendMessage")}>
        <AiOutlineMessage className={`menu_dash_i ${isActive("/SendMessage")}`} />
        <span className={`link_name ${isActive("/SendMessage")}`}>Send Message</span>
      </a>
      <a to="/AfterMSG" className={isActive("/AfterMSG")}>
        <AiOutlineMessage className={`menu_dash_i ${isActive("/AfterMSG")}`} />
        <span className={`link_name ${isActive("/AfterMSG")}`}>Send AFM</span>
      </a>
      <a to="/PendingMessage" className={isActive("/PendingMessage")}>
        <BiMessageRoundedError className={`menu_dash_i ${isActive("/PendingMessage")}`} />
        <span className={`link_name ${isActive("/PendingMessage")}`}>Pending Messages</span>
      </a>
      <a to="/MyPlan" className={isActive("/MyPlan")}>
        <GrPlan className={`menu_dash_i ${isActive("/MyPlan")}`} />
        <span className={`link_name ${isActive("/MyPlan")}`}>My Plan</span>
      </a>
      <a to="/Contacts" className={isActive("/Contacts")}>
        <IoIosContact className={`menu_dash_i ${isActive("/Contacts")}`} />
        <span className={`link_name ${isActive("/Contacts")}`}>Contacts</span>
      </a>
      <a to="/inbox" className={isActive("/inbox")}>
        <MdOutlineForwardToInbox  className={`menu_dash_i ${isActive("/inbox")}`} />
        <span className={`link_name ${isActive("/inbox")}`}>Inbox</span>
      </a>
      <a to="/Keywords" className={isActive("/Keywords")}>
        <LuWholeWord className={`menu_dash_i ${isActive("/Keywords")}`} />
        <span className={`link_name ${isActive("/Keywords")}`}>Keywords</span>
      </a>
      <a to="/Tempelate" className={isActive("/Tempelate")}>
        <LuBookTemplate className={`menu_dash_i ${isActive("/Tempelate")}`} />
        <span className={`link_name ${isActive("/Tempelate")}`}>Templates</span>
      </a>
      <a to="/Settings" className={isActive("/Settings")}>
        <GoGear className={`menu_dash_i ${isActive("/Settings")}`} />
        <span className={`link_name ${isActive("/Settings")}`}>Settings</span>
      </a>
    </ul>
  );
};

export default SmLinks;
