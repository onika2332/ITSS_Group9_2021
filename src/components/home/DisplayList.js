import React, { useEffect, useState } from 'react'
import TransactionList from './transaction/TransactionList'
import Search from './activity/Search';
import './DisplayList.css'
import Filter from './activity/filter/Filter';
function DisplayList(props) {
    //const transactionList = useSelector(state => state.transactions);
    const [list, setList] = useState(props.transactions);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");
    const handleSearch = (str) => {
        // search description or what???
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

    const operateFilter = (str) => {
        setFilter(str);
    }

    useEffect(() => {
        if (filter === "all") {
            setList(props.transactions);
        } else if (filter === "income") {
            let incomes = list.filter(item => item.type === "income");
            setList(incomes);
        } else if (filter === "expense") {
            let expenses = list.filter(item => item.type === "expense");
            setList(expenses);
        }
    }, [filter, props.transactions, list]);

    return (
        <div className='display-container'>
            <div className='action-container'>
                <Search text={text} handleSearch={handleSearch} />
                <Filter operateFilter={operateFilter} />
            </div>
            {list.length > 0 ? <TransactionList list={list} /> : <p>You haven't any transactions yet</p>}
        </div>
    )
}

export default DisplayList
