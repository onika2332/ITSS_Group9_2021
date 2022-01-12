import React from 'react';
import { useSelector } from 'react-redux';
import CategoryChart from './CategoryChart';
import MonthChart from './MonthChart';
import './chart.css'

const ChartContainer = () => {
    // chart is bar chart, display income/expense of 6 months
    const transactionList = useSelector(state => state.transactions);

    return (
        <div className='chart-container'>
            {
                transactionList.length > 0 ? (
                    <MonthChart list={transactionList} />
                ) : <p>None</p>
            }
            {
                transactionList.length > 0 ? (
                    <CategoryChart list={transactionList} />
                ) : <p>None</p>
            }
        </div>
    )
}

export default ChartContainer;