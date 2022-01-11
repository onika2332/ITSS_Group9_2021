import React from 'react'
import Item from './Item'
import './List.css'

const TransactionList = ({ list }) => {
    return (
        <div className='list-transaction'>
            {
                list && list.reverse().map((item) =>
                    <Item
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        amount={item.amount}
                        color={item.type === "Income" ? "Green" : "Red"}
                    />
                )
            }
        </div>
    )
}

export default TransactionList
