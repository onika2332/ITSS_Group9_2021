import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CategoryChart from './CategoryChart';
import MonthChart from './MonthChart';
import './chart.css'

const ChartContainer = () => {
    // chart is bar chart, display income/expense of 6 months
    const transactionList = useSelector(state => state.transactions);
    const thisMonthList = useMemo(() => {
        let date = new Date();
        return transactionList.filter(item => (new Date(item.updatedAt.seconds)).getMonth() === date.getMonth());
    }, [transactionList])
    return (
        <div className='chart-container'>
            {
                thisMonthList.length > 0 ? (
                    <MonthChart list={thisMonthList} />
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