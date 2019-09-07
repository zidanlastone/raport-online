import React, {lazy, Suspense, useEffect} from 'react'
import Loading from '../loader/Loading'
import {connect, useDispatch} from 'react-redux';
import {
    getStudents
} from '../../redux/actions/studentsActions';
const ListItem = lazy(()=> import('./ListItem'));

const loading = () => <Loading/>

function List(props) {

    const useFetching = (actionCreator, dispatch) => {
        useEffect(() => {
            dispatch(actionCreator());
        });
    }
    useFetching(getStudents, useDispatch());
    const [students] = props.students;
    return (
        <Suspense fallback={loading()}>
            {students.map((student) => (
                <ListItem name={student.name}/>
            ))}
        </Suspense>
    )
}

const mapStateToProps = (state) => ({
    students: state.students
});

export default connect(mapStateToProps, {getStudents})(List);
