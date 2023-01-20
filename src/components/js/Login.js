import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
        <div className='login_container'>
            <nav className='login_nav'>
                <a href='/'>
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div className='login_container'>
                    <a href="/home">Join now</a>
                </div>
            </nav>
        </div>
    )
}

export default Login