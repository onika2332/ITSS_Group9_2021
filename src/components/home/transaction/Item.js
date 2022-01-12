import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
    const { color, amount, description, id } = props;
    const navigate = useNavigate();

    return (
        <div className='transaction-item'>
            <div className='transaction-color' id={color}></div>
            <div className='transaction-description'>{description}</div>
            <div className='transacion-amount'>{amount}</div>
            <div>
                <button
                    className='edit-btn'
                    onClick={
                        () => navigate(
                            '/transaction/edit', {
                            state: {
                                id: id,
                                description: description,
                                amount: amount,
                                type: color === "red" ? "expense" : "income"
                            }
                        })
                    }
                >
                    EDIT
                </button>
            </div>
        </div>
    )
}

export default Item
