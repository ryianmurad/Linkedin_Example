import React from 'react';
import '../css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InventoryIcon from '@mui/icons-material/Inventory';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <a href="/">
          <img src="./images/linkedin.png" alt="" />
        </a>
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={CalendarTodayIcon} title='History' />
        <HeaderOption Icon={ContactsIcon} title='Contact' />
        <HeaderOption Icon={InventoryIcon} title='Document' />
        <HeaderOption avatar title='Ryian' />
      </div>
    </div>
  )
}

export default Header