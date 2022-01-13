import React from 'react'
import './AddPage.css'
import { useNavigate } from 'react-router'
import AddForm from './AddForm'
function AddPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className='main-page'>
                <div className='back-container'>
                    <button onClick={() => navigate('/home')}>{`< Back`}</button>
                </div>
                <AddForm />
            </div>
        </>
    )
}

export default AddPage
