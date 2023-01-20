import React from 'react'
import "../css/HeaderOption.css"
import { Avatar } from '@mui/material'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption_icon"/>}
      {avatar && <Avatar className='headerOption_icon' src="./images/Me.jpg"/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption