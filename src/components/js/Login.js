import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
        <div className='login_container'>
            <nav className='login_nav'>
                <a href='/'>
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div className='login_section'>
                    <a className='joinNow' href="/home">Join now</a>
                    <a className='signIn' href="">Sign in</a>
                </div>
            </nav>
            <section className='section'>
                <div className='hero'>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </div>
                <div className='form'>
                    <button className='button'>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Login