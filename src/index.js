import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pricing from './(root)/Pricing/page'
import EventsPage from './(root)/EventsPage/page.js'
import SendMessage from './(root)/SendMessage/page.js'
import SmsCampaigns from './(root)/SmsCampaigns/page.js'
import MyPlan from './(root)/MyPlan/page.js'
import Contacts from './(root)/Contacts/page.js'
import Inbox from './(root)/inbox/page.js'
import Keywords from './(root)/Keywords/page.js'
import AddKeyword from './(root)/AddKeyword/page.js'
import SendMessageOpt from './(root)/SendMessageopt/page.js'
import TrialOPT from './(root)/TrialOPT/page.js'
import SmsSign from './(root)/SmsSign/page.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/SendMessage" element={<SendMessage />} />
        <Route path="/SmsCampaigns" element={<SmsCampaigns />} />
        <Route path="/MyPlan" element={<MyPlan />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/Keywords" element={<Keywords />} />
        <Route path="/AddKeyword" element={<AddKeyword />} />
        <Route path="/SendMessageOpt" element={<SendMessageOpt />} />
        <Route path="/TrialOPT" element={<TrialOPT />} />
        <Route path="/SmsSign" element={<SmsSign />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
