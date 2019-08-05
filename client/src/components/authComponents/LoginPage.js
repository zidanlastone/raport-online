import React from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    Button,
    Alert
} from 'react-bootstrap';

import {connect} from 'react-redux';
import {
    Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    loginUser
} from '../../redux/actions/authActions';

import {
    clearError
} from '../../redux/actions/errorActions';

class LoginPage extends React.Component {

    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            msg:''
        }
    }

    componentDidUpdate(prevProps) {
        const {
            errors
        } = this.props;
        if (errors !== prevProps.errors) {
            if (errors.id === 'LOGIN_FAIL') {
                this.setState({
                    msg: errors.msg
                })
            } else {
                this.setState({
                    msg: null
                })
            }
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const user = {
            username:this.state.username,
            password:this.state.password
        };
        this.props.loginUser(user);
        this.props.clearError();
    }

    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to='/siswa' />
        }
        return(
                <Row className="my-5">
                    <Col md={4} lg={4} sm={3} className="mx-auto">
                        <Card>
                            <Card.Body>
                            {this.state.msg ? <Alert variant="danger" className="shadow" onClose={() => this.props.clearError()} dismissible>{this.state.msg}</Alert>: null}
                            <div className="mx-auto text-center">
                                <h1><i className="fas fa-users"></i></h1>
                            </div>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            onChange={this.handleChange}
                                            name="username"
                                            type="text"
                                            placeholder="Insert username"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="password" name="password" placeholder="Insert password" />
                                    </Form.Group>
                                    <Button type="submit" name="submit" className="form-control">Login</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        );
    }
}

LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.errors
});

const mapDispatchtoProps = {
    loginUser, clearError
}

export default connect(mapStateToProps,mapDispatchtoProps)(LoginPage);
