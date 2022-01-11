import { AccountBalanceWallet } from '@material-ui/icons'
import React from 'react'
import './Logo.css'
const Logo = () => {
    return (
        <div className='app-logo'>
            <p>AntMoney</p>
            <AccountBalanceWallet fontSize='large' color='primary' />
        </div>
    )
}

export default Logo
