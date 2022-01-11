import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../../redux/actions/actions';
import './Item.css';
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
    const { color, amount, description, id } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='transaction-item'>
            <div className='transaction-color'>{color === "Green" ? "Income" : "Expense"}</div>
            <div className='transaction-description'>{description}</div>
            <div className='transacion-amount'>{amount}</div>
            <div>
                <button onClick={() => navigate('/user:id/transaction/edit')}>DELETE</button>
            </div>
            <div>
                <button onClick={() => dispatch(deleteTransaction(id))}>DELETE</button>
            </div>
        </div>
    )
}

export default Item
