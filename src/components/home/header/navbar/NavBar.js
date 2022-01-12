import React from 'react';
import './navbar.css';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { useNavigate } from 'react-router';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='navbar-element'>
                PLAN
                <ListIcon fontSize='large' color='primary' />
            </div>
            <div className='navbar-element'>
                FEEDBACK
                <FeedbackIcon fontSize='large' color='primary' />
            </div>
            <div className='navbar-element' onClick={navigate('/account')}>
                ACCOUNT
                <AccountCircleIcon fontSize='large' color='primary' />
            </div>
        </div>
    )
}

export default NavBar
