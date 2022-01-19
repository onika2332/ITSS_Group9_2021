import React from 'react'
import { useNavigate } from 'react-router'
import './AddPlanPage.css'
import AddPlanForm from './AddPlanForm'
function AddPlanPage() {
    const navigate = useNavigate();
    return (
        <div>
            <>
                <div className='main-page'>
                    <div className='back-container'>
                        <button onClick={() => navigate('/plan')}>{`< Back`}</button>
                    </div>
                    <AddPlanForm />
                </div>
            </>
        </div>
    )
}

export default AddPlanPage
