import React,{lazy,Suspense} from 'react';

import './main.css';

import {
    connect
} from 'react-redux';

import store from './redux/store';

import {
    loadUser
} from './redux/actions/authActions';

import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'


import {Route} from 'react-router-dom';

import Loading from './components/loader/Loading';
const Guest = lazy( () => import('./components/layouts/Guest'));
const Admin = lazy(() => import('./components/layouts/Admin'));
const LoginPage = lazy(() => import('./components/authComponents/LoginPage'));

const loading = () => <Loading/>;

library.add(fab, faPlus, faEdit, faTrash, faSave);

class App extends React.Component {
    
    componentDidMount(){
        store.dispatch(loadUser());
    }

    render(){
        return (
            <Suspense fallback={loading()}>
                <Route path="/" exact component={Guest}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/admin" render={ props => <Admin {...props}/>}/>
            </Suspense>
        )
    }
}

App.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(App);

