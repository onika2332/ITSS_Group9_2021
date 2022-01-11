import React, { useCallback, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const LineChartContainer = ({ data }) => {
    // data input is list of transaction, we need to create 3 or 6 object
    // each object is like { income: ..., expense: ...} to draw a line chart
    if (data.length < 0) {
        return (
            <p>You haven't a transaction yet. Add your transaction</p>
        );
    }

    const [income, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    // let income = [
    //     {time: thisMonth, value: 0}, 
    //     {time: thisMonth - 1, value: 0},
    //     {time: thisMonth - 2, value: 0},
    //     {time: thisMonth - 3, value: 0},
    //     {time: thisMonth - 4, value: 0},
    //     {time: thisMonth - 5, value: 0}
    // ];
    // let expense = [
    //     {time: thisMonth, value: 0}, 
    //     {time: thisMonth - 1, value: 0},
    //     {time: thisMonth - 2, value: 0},
    //     {time: thisMonth - 3, value: 0},
    //     {time: thisMonth - 4, value: 0},
    //     {time: thisMonth - 5, value: 0}
    // ];

    useEffect((data) => {
        let date = new Date();
        let thisMonth = date.getMonth(); // month is 0 -> 11

    }, [data])
    return (
        <div>

        </div>
    )
}

export default LineChartContainer
