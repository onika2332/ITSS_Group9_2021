import React from 'react'
import AddTransaction from './activity/AddTransaction'
import ChartContainer from './chart/transaction/ChartContainer'
import DisplayList from './DisplayList'
import Header from './header/Header'
import './homepage.css'

function HomePage() {
    return (
        <div className='home-container'>
            <Header />
            <ChartContainer />
            <DisplayList />
            <AddTransaction />
        </div>

    )
}

export default HomePage;
// khi homepage reload, cần lưu lại state trong local storage để có thể lấy lại khi cần.

// cần bố trí lại cây component  của home page để khi thực hiện search, filter sẽ k động đến redux.
// Do các chart k liên quan đến việc hiển thị list, nên chart sẽ lấy data từ redux.