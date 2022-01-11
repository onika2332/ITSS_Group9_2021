import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { db } from '../../firestore';
import { doc, getDoc } from 'firebase/firestore/lite';
import md5 from 'md5';


export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("Login to get started");
    const navigate = useNavigate();
    const handleClick = async () => {

        if (username === "" || password === "") {
            setText("Username or password is empty");
        } else {
            const id = md5(username + password);
            const docRef = doc(db, "money_db", `${id}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // redirect to Home + setup id, transactions, plans for redux store
                console.log("Login successfully");
                console.log("Document data:", docSnap.data());
                navigate(`/user/${id}`);
            } else {
                setText("User is already available.Please enter another username!!");
                return;
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
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="footer">
                <button type="button" className="submit-btn" onClick={handleClick} >
                    Login
                </button>
                <div className='login-path'>
                    Haven't an account? <Link to="/">Signup</Link>
                </div>
            </div>
        </div>
    )
}

function Login() {
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
