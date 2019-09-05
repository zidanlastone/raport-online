import React,{lazy,Suspense} from 'react';

import './main.css';

import {Route} from 'react-router-dom';

import Loading from './components/loader/Loading';
const Guest = lazy( () => import('./components/layouts/Guest'));
const Admin = lazy(() => import('./components/layouts/Admin'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const LoginPage = lazy(() => import('./components/authComponents/LoginPage'));

const loading = () => <Loading/>;

function App() {
    return (
        <Suspense fallback={loading()}>
            <Route path="/" exact component={Guest}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/admin" render={ props => <Admin {...props}/>}/>
        </Suspense>
    )
}

export default App
