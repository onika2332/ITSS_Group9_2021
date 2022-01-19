import React, { useState } from 'react'
import './DisplayPlans.css'
import PlansList from './list/PlansList';


function DisplayPlans({ plans }) {
    const [list, setList] = useState({
        plans: plans,
        filter: "all"
    });

    const handleType = (str) => {
        if (str === "all") {
            setList({
                plans: plans,
                filter: str
            });
        } else {
            setList({
                plans: plans.filter(item => item.type === str),
                filter: str
            });
        }
    }
    return (
        <div className='display-container'>
            <div className='action-container' onChange={(e) => handleType(e.target.value)}>
                <label htmlFor='all'>All</label>
                <input id="all" type="radio" value="all" defaultChecked name="type" />
                <label htmlFor='income'>Income</label>
                <input id="income" type="radio" value="income" name="type" />
                <label htmlFor='expense'>Expense</label>
                <input id="expense" type="radio" value="expense" name="type" />
            </div>
            {list.plans.length > 0 ? <PlansList list={list.plans} /> : <p>You haven't any plans yet</p>}
        </div>
    )
}

export default DisplayPlans
