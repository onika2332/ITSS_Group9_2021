import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router';
import { db } from '../../firestore';
import md5 from 'md5';
import './StarList.css'

function StarList() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const { id } = useSelector(state => state.id);
    const [text, setText] = useState("Rating star to feedback our service.");
    const navigate = useNavigate();
    const sendFeedback = async () => {
        const docRef = doc(db, "money_db", id);
        await updateDoc(docRef, {
            feedbacks: arrayUnion({
                id: md5(Math.floor(Math.random() * 10000).toString()),
                star: rating,
                createdAt: Timestamp.now()
            })
        })
        setText("Thanks for your feeback.")
    }
    return (
        <>
            <p>{text}</p>
            <div className='star-list'>
                {
                    // fix 5 star, hard-code
                    [...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                id="star-btn"
                                type='button'
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className='star-item'>&#9733;</span>
                            </button>
                        );
                    })
                }
            </div>
            <div className='feedback-footer'>
                <button
                    id="back-btn"
                    onClick={() => navigate('/home')}
                >
                    {`< Back`}
                </button>
                <button
                    id="send-btn"
                    onClick={() => sendFeedback()}
                >
                    {`Send >`}
                </button>
            </div>
        </>
    );
}

export default StarList;
