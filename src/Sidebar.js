import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import SidebarImg from "./Sidebar.jpg";
import Myname from './Myname.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
          <img src={SidebarImg} alt="" />
          <Avatar className='sidebar_avatar' src={Myname}/>
          <h2>My Name</h2>
          <h4>my_name@example.com</h4>
        </div>

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Viewed you</p>
            <p className='sidebar_statNumber'>1,3453</p>
          </div>
          <div className="sidebar_stat">
            <p>Following you</p>
            <p className='sidebar_statNumber'>532</p>
          </div>
        </div>

    </div>
  )
}

export default Sidebar