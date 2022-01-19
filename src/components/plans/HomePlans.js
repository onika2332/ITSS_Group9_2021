import React from 'react'
import Header from '../home/header/Header'
import AddPlanButton from './AddPlanButton'
import DisplayPlans from './DisplayPlans'
import { useSelector } from 'react-redux';
import './HomePlans.css'
function HomePlans() {
    const plans = useSelector(state => state.plans);
    return (
        <div className='home-plans-container'>
            <Header />
            <DisplayPlans plans={plans} />
            <AddPlanButton />
        </div>
    )
}

export default HomePlans
