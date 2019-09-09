import React, {Suspense } from 'react'
import Loading from '../loader/Loading';

import { connect } from 'react-redux';
import { getTeachers } from '../../redux/actions/teacherActions';
import MaterialTable from 'material-table';

const loading = () => <Loading />

class List extends React.Component {
    componentDidMount = () =>{
        this.props.getTeachers()
    }
    render() {
        const {teachers} = this.props.teachers;
        return (
            <Suspense fallback={loading()}>
                <MaterialTable
                    title="Teacher List"
                    columns={[
                        { title: 'NIP', field: 'nip' },
                        { title: 'Teacher Name', field: 'teacherName' }
                    ]}
                    data={teachers}
                />

            </Suspense>
        )
    }
}

const mapStateToProps = (state) => ({
    teachers: state.teachers
})

export default connect(mapStateToProps, {getTeachers})(List)
