import React from 'react'
import '../css/Beranda.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'

function Beranda() {
    return (
        <div className='app'>
            <Header />
            <div className="app_body">
                <Sidebar />
                <Feed />
            </div>
        </div>
    )
}

export default Beranda