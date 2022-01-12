import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { deleteTransaction, editTransaction } from '../../../redux/actions/actions';
import { options } from '../activity/add/AddForm';
import './EditItem.css'
function EditItem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id, description, amount, type } = state;
    const [desc, setDesc] = useState(description);
    const [am, setAm] = useState(amount);
    const [t, setT] = useState(type);

    const changeType = () => {
        if (t === 'income') {
            setT('expense');
        } else {
            setT('income');
        }
    }
    return (
        <div className='edit-container'>
            <div className='back-container'>
                <button onClick={() => navigate(`/home`)}>{`< Back`}</button>
            </div>
            <p>Edit Transactions</p>
            <input
                type='text'
                placeholder={am}
                value={am}
                onChange={(e) => setAm(e.target.value)}
            />
            <div className='desc-container'>
                <p>Choose description</p>
                <select value={desc} onChange={(e) => setDesc(e.target.value)}>
                    {
                        options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))
                    }
                </select>
            </div>
            <button
                className={t}
                onClick={changeType}
            >
                {t}
            </button>

            <div className="edit-footer">
                <button id="delete-btn" onClick={() => {
                    dispatch(deleteTransaction(id));
                    navigate('/home');
                }}>Delete</button>
                <button id="update-btn" onClick={() =>
                    dispatch(
                        editTransaction(
                            id,
                            {
                                type: t,
                                description: desc,
                                amount: am,
                                updatedAt: new Date()
                            }
                        )
                    )
                }>Update</button>
            </div>
        </div>
    )
}

export default EditItem
