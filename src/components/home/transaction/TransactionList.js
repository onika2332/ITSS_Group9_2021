import React from 'react'
import Item from './Item'
import './List.css'

const TransactionList = ({ list }) => {
    return (
        <div className='list-transaction'>
            {
                list && list.map((item) =>
                    <Item
                        object={item}
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

export default TransactionList
