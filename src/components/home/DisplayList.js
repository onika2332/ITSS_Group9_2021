import React, { useState } from 'react'
import { connect } from 'react-redux'
import TransactionList from './transaction/TransactionList'
import Search from './activity/Search';
import './DisplayList.css'
function DisplayList(props) {
    //const transactionList = useSelector(state => state.transactions);
    const [list, setList] = useState(props.transactions);
    const [text, setText] = useState("");

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

    const handleFilter = () => {
        // filter income/expense, time(this month, 3 month, 6month, all time), description
        // if filter is build ok, can delete search function
    }
    return (
        <div className='display-container'>
            <div className='action-container'>
                <Search text={text} handleSearch={handleSearch} />
                {/* <Filter /> */}
            </div>
            {list.length > 0 ? <TransactionList list={list} /> : <p>You haven't any transactions yet</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, null)(DisplayList)
