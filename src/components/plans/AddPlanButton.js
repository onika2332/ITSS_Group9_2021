import React from 'react'
import { useNavigate } from 'react-router'
import './AddPlanButton.css'

function AddPlanButton() {
    const navigate = useNavigate();
    return (
        <button className='add-button' onClick={() => navigate(`/plan/add`)}>
            +
        </button>
    )
}

export default AddPlanButton
