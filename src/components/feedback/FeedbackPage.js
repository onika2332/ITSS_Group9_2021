import React from 'react';

import './FeedbackPage.css'
import StarList from './StarList'

function FeedbackPage() {

    return (
        <div className='feedback-container'>
            <p>Thanks for your experience. Please give us feedback to improve this app.</p>
            <StarList />
        </div>
    );
}

export default FeedbackPage;
