import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignupPage from './components/signup/SignupPage';
import Login from './components/login/Login';
import ErrorPage from './components/ErrorPage';
import AddPage from './components/home/activity/add/AddPage';
import HomePage from './components/home/HomePage';
import { Provider } from 'react-redux';
import { store } from './redux/store/transactionStore';
import Account from './components/account/Account'
import PasswordPage from './components/account/PasswordPage'
import HomePlans from './components/plans/HomePlans'
import AddPlanPage from './components/plans/add/AddPlanPage'
import ChangePassword from './components/account/ChangePassword'

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
            <Route path='/account' element={<Account />} />
            <Route path='/change-password' element={<PasswordPage>
              <p>Change your password</p>
              <ChangePassword />
            </PasswordPage>} />
            <Route path='/plan' element={<HomePlans />} />
            <Route path='/plan/add' element={<AddPlanPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
