import React from 'react';
import { Form, Button,Card, Col, Row, Alert} from 'react-bootstrap';
import {Link,Redirect}from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerUser } from '../../redux/actions/authActions';
import { clearError } from '../../redux/actions/errorActions';
class Register extends React.Component {
    constructor(){
        super();
        this.state ={
            username:'',
            password:'',
            role:'',
            email:'',
            name:'',
            msg:null
        }
    }

    componentDidUpdate(prevProps){
        const {errors} = this.props;
        if(errors !== prevProps.errors){
            if(errors.id === 'REGISTER_FAIL'){
                this.setState({msg:errors.msg})
            }else{
                this.setState({msg:null})
            }
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password:this.state.password,
            role: this.state.role,
            name: this.state.name,
            email: this.state.email
        }
        this.props.registerUser(newUser);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to= '/admin/dashboard' />
        }
        return (
            <Row>
                <Col md={4} sm={6} className='mx-auto mt-5'>
                {this.state.msg ? <Alert variant="danger" className="shadow" onClose={() => this.props.clearError()} dismissible>{this.state.msg}</Alert>: null}
                    <Card className="shadow-sm">
                        <Card.Body className="m-3">
                        <div className="text-center">
                        <Card.Title as="h3">Register</Card.Title>
                        </div>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group>
                                    <Form.Control className="border-top-0 border-right-0 border-left-0 rounded-0" type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Masukan nama ..." />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control className="border-top-0 border-right-0 border-left-0 rounded-0" type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Masukan email ..." />
                                </Form.Group>
                            <Form.Group>
                                <Form.Control className="border-top-0 border-right-0 border-left-0 rounded-0" type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="Masukan username ..." />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="border-top-0 border-right-0 border-left-0 rounded-0" type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Masukan password ..." />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="border-top-0 border-right-0 border-left-0 rounded-0"
                                onChange={this.onChange} value={this.state.role} name="role" as="select" >
                                    <option>Pilih Role</option>
                                    {['siswa','guru'].map((t,i) => (
                                        <option key={i} value={t}>{t}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                                <Button type="submit" className="form-control rounded-0 border-0" variant="primary">Daftar</Button>
                            </Form>
                            <div className="mx-auto text-center mt-2">
                                <Link to="/login">Login</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors:state.errors
});
export default connect(mapStateToProps,
    { registerUser, clearError}
)(Register)
