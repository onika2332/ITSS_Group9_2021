import { Search } from '@material-ui/icons'
import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import AddTransaction from './activity/AddTransaction'
import ChartContainer from './chart/transaction/ChartContainer'
import DisplayList from './DisplayList'
import Header from './header/Header'
import { useDispatch } from 'react-redux';
import { setID, setTransactions } from '../../redux/actions/actions';
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firestore'

function HomePage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const transactions = useMemo(async () => {
        const docRef = doc(db, 'money_db', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().transactions;
        } else {
            return [];
        }
    }, [id]);

    const plans = useMemo(async () => {
        const docRef = doc(db, 'money_db', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().plans;
        } else {
            return [];
        }
    }, [id]);

    const setData = () => {
        dispatch(setID(id));
        dispatch(setTransactions(transactions));
        dispatch(setID(plans));
    }
    return (
        <div className='home-container' onLoad={setData}>
            <Header />
            {/* <ChartContainer />
                <DisplayList data={list} />
                <AddTransaction /> */}
            <DisplayList />
            <AddTransaction />
        </div>

    )
}

export default HomePage


// cần bố trí lại cây component  của home page để khi thực hiện search, filter sẽ k động đến redux.
// Do các chart k liên quan đến việc hiển thị list, nên chart sẽ lấy data từ redux.