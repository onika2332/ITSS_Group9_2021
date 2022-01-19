import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { db } from '../../firestore';
import { doc, getDoc } from 'firebase/firestore/lite';
import md5 from 'md5';
import { setID, setPlans, setTransactions } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';


export const LoginForm = () => {
    const dispatch = useDispatch();
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
                dispatch(setID(id));
                dispatch(setTransactions(docSnap.data().transactions));
                dispatch(setPlans(docSnap.data().plans));
                console.log("Login successfully");
                navigate(`/home`);
            } else {
                setText("User is not available.Please enter another username!!");
                return;
            }
        }
    }

    return (
        <div className="form">
            <div className='text-note' >{text}</div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="footer">
                <button type="button" className="submit-btn" onClick={handleClick} >
                    Login
                </button>
                <div className='login-path'>
                    Haven't an account? <Link to="/signup">Signup</Link>
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
//export default Login
