import React,{Fragment} from 'react';
import './App.css';

import {
  connect
} from 'react-redux';

import store from './redux/store';

import {
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNavbar from './components/SideNavbar/SideNavbar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Students from './components/Students/Students';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/authComponents/LoginPage';
import AddStudent from './components/Students/AddStudent';

import {
  Container
} from 'react-bootstrap';

import {
  loadUser
} from './redux/actions/authActions';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        sidebar:true
      }
    }

    componentDidMount(){
      store.dispatch(loadUser());
    }

    toggleSidebar = (e) => {
      e.preventDefault();
      this.setState(state => ({
        sidebar: !state.sidebar
      }))
    }
    render(){
      let sidebar = this.state.sidebar ? "d-flex" : "d-flex toggled";

        const {isAuthenticated} = this.props.auth;
        const authTemplate = (
            <Fragment>
            <SideNavbar/>
                <div id="page-content-wrapper">
                    <TopNavbar auth={isAuthenticated} toggle={this.toggleSidebar}/>
                    <Container>
                        <Route exact path="/" component={Students} />
                        <PrivateRoute exact path="/students" component={Students} />
                        <PrivateRoute exact path="/students/add" component={AddStudent} />
                    </Container>
                </div>
            </Fragment>
        );

        const guestTemplate = (
            <Fragment>
              <div id="page-content-wrapper">
                    <TopNavbar auth={isAuthenticated} toggle={this.toggleSidebar}/>
                    <Container>
                        <Route exact path="/login" component={LoginPage} />
                    </Container>
                </div>
            </Fragment>
        );

      return (
      <div>
          <div className={sidebar} id="wrapper">
          {isAuthenticated ? authTemplate:guestTemplate}
            </div>
        </div>
      );
    }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  auth:state.auth
})
export default connect(mapStateToProps)(App);

