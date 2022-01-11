import { arrayUnion, doc, updateDoc } from 'firebase/firestore/lite';
import md5 from 'md5';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { db } from '../../../../firestore';
import { addTransaction } from '../../../../redux/actions/actions';
import "./AddForm.css"

const AddForm = () => {
    const { id } = useParams();
    const [type, setType] = useState('income');
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();
    const [text, setText] = useState("Add your transaction here");
    const changeType = () => {
        if (type === 'income') {
            setType('expense');
        } else {
            setType('income');
        }
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleClick = async () => {
        if (amount === 0 || "" === desc) {
            setText("Amount or description is empty");
            return;
        } else {
            dispatch(addTransaction({
                id: md5(amount.toString() + desc),
                amount: amount,
                description: desc,
                type: type
            }));
            const docRef = doc(db, "money_db", `${id}`);
            await updateDoc(docRef, {
                transactions: arrayUnion({
                    id: md5(amount.toString() + desc),
                    amount: amount,
                    description: desc,
                    type: type
                })
            });
            setText("Add new transaction successfully. Do you want more?");
        }
    }

    return (
        <div className='add-form'>
            <p>{text}</p>
            <input
                type='text'
                placeholder='Enter amount...'
                value={amount}
                onChange={(e) => handleAmount(e)}
            />
            <input
                type='text'
                placeholder='Description...'
                value={desc}
                onChange={(e) => handleDesc(e)}
            />
            <button
                className={type}
                onClick={changeType}
            >
                {type}
            </button>
            <button
                className='confirm'
                onClick={() => {
                    handleClick();
                    setDesc("");
                    setAmount("");
                }}
            >
                Confirm
            </button>
        </div>
    )
}

export default AddForm
