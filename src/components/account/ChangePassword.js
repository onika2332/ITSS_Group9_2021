import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../../firestore';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import './ChangePassword.css'
import md5 from 'md5';
import { useNavigate } from 'react-router';

function ChangePassword() {
    const navigate = useNavigate();
    const { id } = useSelector(state => state.id);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("Complete form to change password");
    const updatePassword = async (event) => {
        event.preventDefault();
        if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
            setMsg("Empty password");
            return;
        } else if (newPassword !== confirmPassword) {
            setMsg("Confirm password aren't the same");
        } else if (newPassword === oldPassword) {
            setMsg("New password shouldn't be the same of old password");
        } else {
            const docRef = doc(db, "money_db", `${id}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const p = md5(oldPassword);
                if (p !== docSnap.data().password) {
                    setMsg("Current password is wrong.Enter again.");
                } else {
                    await updateDoc(docRef, {
                        password: md5(newPassword)
                    });
                    setMsg("Update password successfuly");
                    // setTimeout(() => {
                    //     navigate('/home');
                    // }, 1000);
                }
            }
        }
    }
    return (
        <>
            <p>{msg}</p>
            <form className='form-container'>
                <div className='form-item'>
                    <label for="old-password">Current password</label>
                    <input
                        id="old-password"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className='form-item'>
                    <label for="new-password">New password</label>
                    <input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className='form-item'>
                    <label for="confirm-password">Confirm new password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div id="form-footer">
                    <button id="back-btn" onClick={() => navigate('/home')}>{`< Back`}</button>
                    <button id="change-password" type='submit' onClick={updatePassword}>Change password</button>
                </div>
            </form>
        </>
    )
}
export default ChangePassword

