import React, { useState } from 'react';
import './signup.css';
import { db } from '../../firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import md5 from 'md5';

export const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("Signup to get started");
    const navigate = useNavigate();
    const handleSignup = async () => {
        if (username === "" || password === "" || email === "") {
            setText("Username, email or password is now empty. Please enter!");
            return;
        } else {
            // query firestore
            const docRef = doc(db, "money_db", `${md5(username + password)}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setText("User is already available.Please enter another username!!");
                return;
            } else {
                await setDoc(doc(db, "money_db", `${md5(username + password)}`), {
                    username: username,
                    password: md5(password),
                    email: email,
                    transactions: [],
                    plans: []
                });
                setText("Create successfully");
                setTimeout(() => { }, 1000);
                navigate('/');
            }
        }
    }
    return (
        <div className="form">
            <div className='text-note'>{text}</div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="footer">
                <button type="button" className="submit-btn" onClick={handleSignup} >
                    Register
                </button>
                <div className='login-path'>
                    Have an account? <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    )
}

function SignupPage() {

    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <SignupForm />
            </div>

        </div>
    )
}

export default SignupPage