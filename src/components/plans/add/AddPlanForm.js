import { doc, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore/lite';
import md5 from 'md5';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firestore';
import { addPlan } from '../../../redux/actions/actions';
import '../../home/activity/add/AddForm.js'

function AddPlanForm() {

    const [type, setType] = useState("income");
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("...");
    const [expired, setExpired] = useState(new Date());
    const [text, setText] = useState("Add your new plans");

    const dispatch = useDispatch();
    const { id } = useSelector(state => state.id);

    const changeType = () => {
        if (type === 'income') {
            setType('expense');
        } else {
            setType('income');
        }
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const handleClick = async (event) => {
        event.preventDefault();
        if (amount === 0 || "" === desc) {
            setText("Amount or description is empty");
            return;
        } else {
            dispatch(addPlan({
                id: md5(amount.toString() + desc),
                amount: amount,
                description: desc,
                type: type,
                updatedAt: Timestamp.now(),
                expiredAt: Timestamp.fromDate(expired),
            }))
            const docRef = doc(db, "money_db", `${id}`);
            await updateDoc(docRef, {
                plans: arrayUnion({
                    id: md5(amount.toString() + desc),
                    amount: amount,
                    description: desc,
                    type: type,
                    updatedAt: Timestamp.now(),
                    expiredAt: Timestamp.fromDate(expired)
                })
            });
            setText("Add new plan successfully. Do you want more?");
        }
    }
    return (
        <form onSubmit={() => {
            handleClick();
            setDesc("");
            setAmount("");
        }}>
        <div className='add-form'>
            <p>{text}</p>
            <input
                type='number' min="1"
                placeholder='Enter amount...'
                value={amount}
                onChange={(e) => handleAmount(e)}
            />
            <input
                type='text'
                placeholder='Enter description...'
                value={desc}
                onChange={(e) => handleDesc(e)}
            />
            <ReactDatePicker
                selected={expired}
                minDate={new Date()}
                onChange={(date) => setExpired(date)}
                isClearable
                placeholderText="Plan's expired date"
            >
                <div style={{ color: "red" }}>Please choose the expired of plan</div>
            </ReactDatePicker>
            <button
                className={type}
                onClick={changeType}
            >
                {type}
            </button>
            <button
                className='confirm'
                type='submit'
            >
                Confirm
            </button>
        </div>
        </form>
    )
}

export default AddPlanForm
