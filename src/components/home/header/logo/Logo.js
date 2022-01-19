import { AccountBalanceWallet } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router'
import './Logo.css'
const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className='app-logo' onClick={() => navigate('/home')}>
            <p>AntMoney</p>
            <AccountBalanceWallet fontSize='large' color='primary' />
        </div>
    )
}

export default Logo
