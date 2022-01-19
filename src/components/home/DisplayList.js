import React, { useState } from 'react'
import TransactionList from './transaction/TransactionList'
import Search from './activity/Search';
import './DisplayList.css'
function DisplayList(props) {
    const [list, setList] = useState(props.transactions);
    const [text, setText] = useState("");
    const handleSearch = (str) => {
        setText(str);
        if (str === "") {
            setList(props.transactions);
        } else {
            if (list.length === 0) {
                return;
            }
            const successList = props.transactions.filter(item => item.description.toLowerCase().includes(str.toLowerCase()));
            setList(successList);
        }
    }

    return (
        <div className='display-container'>
            <div className='action-container'>
                <Search text={text} handleSearch={handleSearch} />
            </div>
            {list.length > 0 ? <TransactionList list={list} /> : <p>You haven't any transactions yet</p>}
        </div>
    )
}

export default DisplayList
