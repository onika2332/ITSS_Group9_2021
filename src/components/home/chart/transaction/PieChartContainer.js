// import React, { useMemo } from 'react'
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useSelector } from 'react-redux';

// ChartJS.register(ArcElement, Tooltip, Legend);
// export const PieChartContainer = ({ list }) => {
//     // this chart display all transaction of this month, it will  be pie chart
//     let date = new Date(); // get "now"
//     const transactionList = list.filter(item => item.updatedAt.getMonth() == date.getMonth());
//     if (transactionList.length <= 0) {
//         return (
//             <p>You haven't any transaction this month. Add your transaction</p>
//         );
//     }
//     const details = useMemo(() => {
//         let income = 0, expense = 0;
//         transactionList.map(item =>
//             item.type === "income" ? income += item.amount : expense += item.amount
//         )

//         return {
//             income: income,
//             expense: expense
//         };
//     }, [data]);
//     const chartData = useMemo((details) => {
//         return {
//             labels: ['Income', 'Expense'],
//             datasets: [
//                 {
//                     label: 'Income/Expense',
//                     data: [details.income, details.expense],
//                     backgroundColor: [
//                         'rgba(255, 0, 0, 0.8)',
//                         'rgba(0, 255, 0, 0.8)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 0, 0, 0.8)',
//                         'rgba(0, 255, 0, 0.8)'
//                     ],
//                     borderWidth: 1,
//                 },
//             ],
//         }
//     }, [details]);
//     return (
//         <Pie data={chartData} />
//     );
// }
