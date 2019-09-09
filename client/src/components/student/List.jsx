import React, {lazy, Suspense} from 'react'
import Loading from '../loader/Loading';
import {connect} from 'react-redux';
import {getStudents} from '../../redux/actions/studentsActions';
import MaterialTable from 'material-table';
const loading = () => <Loading/>

class List extends React.Component{
    componentDidMount = ()=>{
        this.props.getStudents();
    }
    render(){
        const {students} = this.props.students  
        return (
            <Suspense fallback={loading()}>
                <MaterialTable
                    title = "Student List"
                    columns = {[
                        {title:'Photo', field:'image', render: rowData =><img src={'/assets/image/'+rowData.image} style={{width:80,height:80}} /> },
                        {title:'Name', field:'name'},
                        {title:'NIS', field:'nis'},
                        { title: 'NISN', field: 'nisn' },
                        { title: 'Gender', field: 'gender' },
                        { title: 'Birth place', field: 'birthLocation' },
                        { title: 'Birth date', field: 'birthDate' }
                    ]}

                    data = {students}
                />
                    
            </Suspense>
        )
    }
}
const mapStateToProps = (state) => ({
    students: state.students
});

export default connect(mapStateToProps, { getStudents } )(List);
