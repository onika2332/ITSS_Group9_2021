import React, { useMemo, useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function MonthChart({ list }) {
    const [details, setDetails] = useState({ income: 0, expense: 0 })

    useEffect(() => {
        let income = 0, expense = 0;
        list.map(item =>
            item.type === "income" ? income += parseInt(item.amount) : expense += parseInt(item.amount)
        )

        setDetails({ income: income, expense: expense })
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
        <div style={{ height: '250px', width: '250px', position: "relative" }}>
            <Pie
                id="month-chart"
                data={chartData}
                style={{ height: '220px', width: '220px' }}
            />
        </div>

    );
}

export default MonthChart

