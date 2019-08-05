import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import {Nav} from 'react-bootstrap';
import {logout} from '../../redux/actions/authActions';
class Logout extends Component{
    render(){
        return(
            <Fragment>
                <Nav.Link onClick={this.props.logout} href="#">
                Logout
                </Nav.Link>
            </Fragment>
        )
    }
}
export default connect(null,{logout})(Logout);