import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../../firestore';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import './ChangePassword.css'
import md5 from 'md5';

function ChangePassword() {
    const { id } = useSelector(state => state.id);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("Change your password");

    const updatePassword = () => {
        if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
            setMessage("Empty password");
            return;
        } else if (newPassword !== confirmPassword) {
            setMessage("Confirm password aren't the same");
        } else if (newPassword === oldPassword) {
            setMessage("New password shouldn't be the same of old password");
        } else {
            const docRef = doc(db, "money_db", `${id}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const p = md5(docSnap.data().username + oldPassword);
                if (p !== docSnap.data().password) {
                    setMessage("Current password is wrong");
                } else {
                    await updateDoc(docRef, {
                        password: p
                    });
                    setMessage("Update password successfuly");
                    setTimeout(() => {
                        navigate('/home');
                    }, 1000);
                }
            }
        }
    }
    return (
        <div className='change-password-page'>
            <p>{message}</p>
            <form className='form-container'>
                <div className='form-item'>
                    <label for="old-password">Current password</label>
                    <input
                        id="old-password"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.tartget.value)}
                    />
                </div>
                <div className='form-item'>
                    <label for="new-password">New password</label>
                    <input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.tartget.value)}
                    />
                </div>
                <div className='form-item'>
                    <label for="confirm-password">Confirm new password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.tartget.value)}
                    />
                </div>
                <div id="form-footer">
                    <button id="back-btn" onClick={() => navigate('/home')}>{`< Back`}</button>
                    <button id="change-password" onClick={updatePassword}>Change password</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword
