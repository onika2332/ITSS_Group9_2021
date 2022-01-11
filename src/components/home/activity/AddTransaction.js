import React from 'react'
import './AddTransaction.css'
import { useNavigate, useParams } from 'react-router'
const AddTransaction = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <button className='add-button' onClick={() => navigate(`/user/${id}/add`)}>
                +
            </button>
        </>
    )
}

export default AddTransaction
