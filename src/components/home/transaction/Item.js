import React from 'react';
import './Item.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../../redux/actions/actions';
import { useNavigate } from 'react-router';
import { db } from '../../../firestore';
import { doc, updateDoc, arrayRemove} from 'firebase/firestore/lite';

const Item = (props) => {
    const user = useSelector(state => state.id);
    const userid = user.id;
    const { object, color, amount, description, id } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='transaction-item' id={id}>
            <button className='transaction-color' id={color}></button>
            <div className='transaction-description'>{description}</div>
            <div className='transacion-amount'>{amount}</div>
            <div className="delete-btn-container">
                <button id="delete-btn" onClick={async () => {
                    dispatch(deleteTransaction(id));
                    const docRef = doc(db, "money_db", `${userid}`);
                    await updateDoc(docRef, {
                        transactions: arrayRemove({
                            ...object
                        })
                    })
                    navigate("/home");
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Item
