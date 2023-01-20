import { Avatar } from '@mui/material';
import React from 'react';
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
          <img src="./images/Sidebar.jpg" alt="" />
          <Avatar className='sidebar_avatar' src="./images/Myname.jpg"/>
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


        <div className='sidebar_bottom'>
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar