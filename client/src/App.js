import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  Provider
} from 'react-redux';

import store from './redux/store';

import Home from './components/Home';
import SideNavbar from './components/SideNavbar/SideNavbar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Students from './components/Students/Students';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/authComponents/LoginPage';
import { Container } from 'react-bootstrap';
import { loadUser } from './redux/actions/authActions';

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
        let sidebar = this.state.sidebar;
        return (
          <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <div className={ sidebar ? "d-flex":"d-flex toggled"} id="wrapper">
                      <SideNavbar/>
                      <div id="page-content-wrapper">
                        <TopNavbar toggle={this.toggleSidebar}/>
                        <Container>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={LoginPage} />
                            <PrivateRoute exact path="/students" component={Students} />
                        </Container>
                      </div>
                    </div>
                </Switch>
            </Provider>
          </BrowserRouter>
        );
      }
}

export default App;
