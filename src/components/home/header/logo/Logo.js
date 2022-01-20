import { AccountBalanceWallet } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router'
import './Logo.css'
const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className='app-logo' onClick={() => navigate('/home')}>
            <div className='app-logo-div'>
            <p className='app-logo-text'>AntMoney</p>
            <AccountBalanceWallet fontSize='large' color='primary' />
            </div>
        </div>
    )
}

export default Logo
