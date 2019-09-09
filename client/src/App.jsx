import React,{lazy,Suspense} from 'react';

import './main.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

import {Route} from 'react-router-dom';
import store from './redux/store';
import Loading from './components/loader/Loading';
import { loadUser } from './redux/actions/authActions';
const Guest = lazy( () => import('./components/layouts/Guest'));
const Admin = lazy(() => import('./components/layouts/Admin'));
const LoginPage = lazy(() => import('./components/authComponents/LoginPage'));
const Register = lazy(() => import('./components/authComponents/Register'));

const loading = () => <Loading/>;

library.add(fab, faPlus, faEdit, faTrash, faSave);

class App extends React.Component {
    componentDidMount = () => {
        store.dispatch(loadUser());
    }
    render(){
        return (
            <Suspense fallback={loading()}>
                <Route path="/" exact component={Guest}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/register" exact component={Register} />
                <Route path="/admin" render={ props => <Admin {...props}/>}/>
            </Suspense>
        )
    }
}

export default App;

