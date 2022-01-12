import React from 'react';
import './Item.css';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../../redux/actions/actions';
import { useNavigate } from 'react-router';

const Item = (props) => {
    const { color, amount, description, id } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='transaction-item' id={id}>
            <button className='transaction-color' id={color}></button>
            <div className='transaction-description'>{description}</div>
            <div className='transacion-amount'>{amount}</div>
            <div className="delete-btn-container">
                <button id="delete-btn" onClick={() => {
                    dispatch(deleteTransaction(id));
                    navigate("/home");
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Item
