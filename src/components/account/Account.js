import { doc, getDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { db } from '../../firestore';
import './account.css'
function Account() {
    const { id } = useSelector(state => state.id);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "money_db", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data = docSnap.data();
                setEmail(data.email);
                setUsername(data.username);
            }
        }

        getData();
    }, [id]);
    return (
        <div className='account-container'>
            <p>Account profile</p>
            <div id="item">
                <label for="username">Username</label>
                <p id="username">{username}</p>
            </div>
            <div id="item">
                <label for="email">Email</label>
                <p id="email">{email}</p>
            </div>
            <div id="account-footer">
                <button id="back-btn" onClick={() => navigate('/home')}>{`< Back`}</button>
                <button id="change-password" onClick={() => navigate('/change-password')}>Change password</button>
            </div>
        </div>
    )
}

export default Account
