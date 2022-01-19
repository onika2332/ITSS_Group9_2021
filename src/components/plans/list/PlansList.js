import React from 'react'
import './PlansList.css'
import PlanItem from './PlanItem'
function PlansList({ list }) {
    return (
        <div className='list-plan'>
            {
                list && list.map((item) =>
                    <PlanItem
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        amount={item.amount}
                        color={item.type === "income" ? "green" : "red"}
                    />
                )
            }
        </div>
    )
}

export default PlansList
