import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore/lite';
import md5 from 'md5';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../../firestore';
import { addTransaction } from '../../../../redux/actions/actions';
import "./AddForm.css"

export const options = [
    {
        value: "Other...",
        label: "Other..."
    },
    {
        value: "Bill",
        label: "Bill"
    },
    {
        value: "Educations",
        label: "Educations"
    },
    {
        value: "Food",
        label: "Food"
    },
    {
        value: "Entertainment",
        label: "Entertainment"
    },
    {
        value: "Pet",
        label: "Pet"
    },
    {
        value: "Salary",
        label: "Salary"
    },
    {
        value: "Other incomes",
        label: "Other incomes"
    },
    {
        value: "Medical",
        label: "Medical"
    },
    {
        value: "Transport",
        label: "Transport"
    }
];

const AddForm = () => {
    const [type, setType] = useState('income');
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("Others...");
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.id);
    const [text, setText] = useState("Add your transaction here");
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

    const handleClick = async () => {
        if (amount === 0 || "" === desc) {
            setText("Amount or description is empty");
            return;
        } else {
            dispatch(addTransaction({
                id: md5(amount.toString() + desc),
                amount: amount,
                description: desc,
                type: type,
                updatedAt: Timestamp.now(),
            }));
            const docRef = doc(db, "money_db", `${id}`);
            await updateDoc(docRef, {
                transactions: arrayUnion({
                    id: md5(amount.toString() + desc),
                    amount: amount,
                    description: desc,
                    type: type,
                    updatedAt: Timestamp.now()
                })
            });
            setText("Add new transaction successfully. Do you want more?");
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
            <div className='desc-container'>
                <p>Description</p>
                <select defaultValue={desc} onChange={handleDesc}>
                    {
                        options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))
                    }
                </select>
            </div>
            <button
                className={type}
                onClick={changeType}
            >
                {type}
            </button>
            <button
                className='confirm'
                type="submit"
            >
                Confirm
            </button>
        </div>
        </form>
    )
}

export default AddForm
