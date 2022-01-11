import React from 'react'
import './AddPage.css'
import { useNavigate, useParams } from 'react-router'
import AddForm from './AddForm'
function AddPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <div className='main-page'>
                <div className='back-container'>
                    <button onClick={() => navigate(`/user/${id}`)}>{`< Back`}</button>
                </div>
                <AddForm />
            </div>
        </>
    )
}

export default AddPage
