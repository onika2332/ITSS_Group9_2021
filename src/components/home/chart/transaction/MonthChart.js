import React, { useMemo } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const initData = () => {
    return { income: 0, expense: 0 }
}

function MonthChart({ list }) {

    const details = useMemo(() => {
        let data = initData();
        let date = new Date();
        let thisMonthList = list.filter(item => {
            let itemMonth = (new Date(1000 * item.updatedAt.seconds)).getMonth();
            return itemMonth === date.getMonth()
        });
        thisMonthList.map(item =>
            item.type === "income"
                ? data.income += parseInt(item.amount)
                : data.expense += parseInt(item.amount)
        )
        return data;
    }, [list]);

    const chartData = useMemo(() => {
        return {
            labels: ['Income', 'Expense'],
            datasets: [
                {
                    label: 'Income/Expense This Month',
                    data: [details.income, details.expense],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.3)',
                        'rgba(255, 0, 0, 0.3)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }, [details]);

    return (
        <div style={{ height: '240px', width: '240px', position: "relative" }}>
            <Pie
                id="month-chart"
                data={chartData}
                style={{ height: '200px', width: '200px' }}
            />
        </div>

    );
}

export default MonthChart

