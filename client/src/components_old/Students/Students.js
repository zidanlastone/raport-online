import React, { Component } from 'react';
import StudentList from './StudentList';
import {connect} from 'react-redux';

import {
    getStudents
} from '../../redux/actions/studentsActions';

import {
    Link
} from 'react-router-dom';

class Students extends Component {

    constructor(props){
        super(props);
        this.state = {
            students:this.props.students,
            moreItemsLoading: false,
            hasNextPage: true,
        }
    }

    componentDidMount(){
        this.props.getStudents();
    }

    render() {
        const {students} = this.props.students;
        return (
            <>
                <Link to="/students/add">Add</Link>
                <StudentList items = {students}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    students: state.students
});

const mapDispatchToProps = {
    getStudents
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);