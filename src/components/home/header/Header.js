import React from 'react'
import './Header.css'
import Logo from './logo/Logo'
import NavBar from './navbar/NavBar'
const Header = () => {
    return (
        <div className='app-header'>
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header