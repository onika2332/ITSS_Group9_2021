import React from 'react'
import './AddTransaction.css'
import { useNavigate } from 'react-router'
const AddTransaction = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='add-button' onClick={() => navigate(`/transaction/add`)}>
                +
            </button>
        </>
    )
}

export default AddTransaction
