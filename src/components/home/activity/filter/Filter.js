import React from 'react'
import './filter.css'
import FilterItem from './FilterItem'
import { useState } from 'react';
function Filter({ operateFilter }) {
    const [income, setIncome] = useState(false);
    const [expense, setExpense] = useState(false);
    const [all, setAll] = useState(true);
    const handleActive = () => {
        if (all) {
            operateFilter("all");
        } else if (income) {
            operateFilter("income");
        } else if (expense) {
            operateFilter("expense");
        }
    }
    const handleAll = () => {
        if (!all) {
            setAll(!all);
            setIncome(false);
            setExpense(false);
            handleActive();
        }
    }

    const handleIncome = () => {
        if (!income) {
            setIncome(!income);
            setExpense(false);
            setAll(false);
            handleActive();
        }
    }

    const handleExpense = () => {
        if (!expense) {
            setIncome(false);
            setExpense(!expense);
            setAll(false);
            handleActive();
        }
    }
    return (
        <div className='filter-container'>
            <FilterItem name="All" status={all} handleClick={handleAll} />
            <FilterItem name="Income" status={income} handleClick={handleIncome} />
            <FilterItem name="Expense" status={expense} handleClick={handleExpense} />
        </div>
    )

}

export default Filter
