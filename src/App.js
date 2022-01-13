import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignupPage from './components/signup/SignupPage';
import Login from './components/login/Login';
import ErrorPage from './components/ErrorPage';
import AddPage from './components/home/activity/add/AddPage';
import HomePage from './components/home/HomePage';
import { Provider } from 'react-redux';
import { store } from './redux/store/transactionStore';
import EditItem from './components/home/transaction/EditItem';

function App() {
  return (
    <Provider store={store} >
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/transaction/add' element={<AddPage />} />
            <Route path='/transaction/edit' element={<EditItem />} />
            {/*<Route path='/account' element={<AccountPage />} />
            <Route path='plan' element={<PlanPage />} />
              <Route path='feedback' element={<FeedbackPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
