import React, { Component } from 'react';
import StudentList from './StudentList';
import {connect} from 'react-redux';

import {
    getStudents
} from '../../redux/actions/studentsActions';

class Students extends Component {

    constructor(props){
        super(props);
        this.state = {
            students:this.props.students,
            moreItemsLoading: false,
            hasNextPage: true,
        }

        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.props.getStudents();
    }

    loadMore(){
        this.setState({
            moreItemsLoading: true
        }, () => {

            fetch('https://jsonplaceholder.typicode.com/photos/')
                .then(res => this.setState({
                    moreItemsLoading: false,
                    items: [...this.state.items, res.json]
                }));
        });
    }


    render() {
        const {students} = this.state;
        return (
            <>
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