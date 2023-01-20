import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import image from './Me.jpg'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption_icon"/>}
      {avatar && <Avatar className='headerOption_icon' src={image}/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption