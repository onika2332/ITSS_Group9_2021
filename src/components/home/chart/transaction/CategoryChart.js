import React, { useMemo } from 'react'
import { options } from '../../activity/add/AddForm'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
// data = [{ label: name, value: value }, {...}, ..., {...}]
const initData = () => {
    return Array.from(options, option => { return { label: option.label, value: 0 } });
}

// expense by category
function CategoryChart({ list }) {

    const countedData = useMemo(() => {
        let details = initData();
        details.forEach(detail => {
            list
                .filter(item => { return item.description === detail.label && item.type === "expense" })
                .map(item => detail.value += parseInt(item.amount))
        })
        return details;
    }, [list])
    const chartData = useMemo(() => {
        const colors = countedData.map(detail => {
            return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.3)`;
        });
        const datas = countedData.map(detail => detail.value);
        const labels = countedData.map(detail => detail.label)
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Category Expense Chart',
                    data: datas,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1,
                },
            ],
        }
    }, [countedData])
    return (
        <div style={{ height: '250px', width: '250px', position: "relative" }}>
            <Doughnut
                id="category-chart"
                data={chartData}
                style={{ height: '220px', width: '220px' }}
            />
        </div>
    )
}

export default CategoryChart
