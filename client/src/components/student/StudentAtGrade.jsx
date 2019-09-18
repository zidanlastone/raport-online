import React, { Component, Suspense, lazy } from 'react'
import {connect} from 'react-redux'

import {
    getStudentsByGrade
} from '../../redux/actions/studentsActions';

import Loading from "../loader/Loading";

const List = lazy(()=> import('./List'));

const loading = () => <Loading/>
export class StudentAtGrade extends Component {
    componentDidMount(){
        let id = this.props.match.params.id;
        this.props.getStudentsByGrade(id);
    }

    componentDidUpdate(prevProps, prevState){
        let id = this.props.match.params.id;
        if(id !== prevProps.match.params.id){
            this.props.getStudentsByGrade(id);
        }
    }
    render() {
        const {students} = this.props.students
        return (
            <Suspense fallback={loading()}>
                <div className="container-fluid mt-3">
                <List students={students}/>
                </div>
            </Suspense>
        )
    }
}
const mapStateToProps = (state) => ({
    students: state.students
}) 
export default connect(mapStateToProps, { getStudentsByGrade})(StudentAtGrade)
