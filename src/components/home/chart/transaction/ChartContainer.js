import React from 'react';
import { useSelector } from 'react-redux';
import { PieChartContainer } from './PieChartContainer';


const ChartContainer = () => {
    // chart is bar chart, display income/expense of 6 months
    const transactionList = useSelector(state => state.transactions);
    return (
        <div className='chart-container'>
            <PieChartContainer data={transactionList} />
            {/* <LineChartContainer data={transactionList} /> */}
        </div>
    )
}

export default ChartContainer;