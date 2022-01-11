import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TransactionList from './transaction/TransactionList'
function DisplayList() {
    const transactionList = useSelector(state => state.transactions);
    const [list, setList] = useState(transactionList);
    const [text, setText] = useState("");

    const handleSearch = (str) => {
        // search description or what???
        setText(str);
        if (str === "") {
            setList(transactionList);
        } else {
            const successList = list?.filter(item => item.description.include(str));
            setList(successList);
        }
    }

    const handleFilter = () => {
        // filter income/expense, time(this month, 3 month, 6month, all time), description
        // if filter is build ok, can delete search function
    }
    return (
        <div className='display-container'>
            <div className='action-container'>
                {/* <Search text={text} handle={handleSearch} />
                <Filter /> */}
            </div>
            {list ? <TransactionList list={list} /> : <p>You haven't any transactions yet</p>}
        </div>
    )
}

export default DisplayList
