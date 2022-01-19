import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deletePlan } from '../../../redux/actions/actions';
import './PlanItem.css'

function PlanItem({ color, description, amount, id }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='plan-item' id={id}>
            <button className='plan-color' id={color}></button>
            <div className='plan-description'>{description}</div>
            <div className='plan-amount'>{amount}</div>
            <div className="delete-btn-container">
                <button id="delete-btn" onClick={() => {
                    dispatch(deletePlan(id));
                    navigate("/plan");

                }}>Delete</button>
            </div>
        </div>
    )
}

export default PlanItem
