import React, { Suspense } from 'react'
import Loading from '../loader/Loading';

import { connect } from 'react-redux';
import { getSubjects } from '../../redux/actions/subjectActions';
import MaterialTable from 'material-table';

const loading = () => <Loading />

class List extends React.Component {
    componentDidMount = () => {
        this.props.getSubjects()
    }
    render() {
        const { subjects } = this.props.subjects;
        console.log(subjects);
        return (
            <Suspense fallback={loading()}>
                <MaterialTable
                    title="Subject List"
                    columns={[
                        { title: 'Subject Name', field: 'subjectName' },
                        { title: 'Teacher Name', field: 'teacher.teacherName' }
                    ]}
                    data={subjects}
                />

            </Suspense>
        )
    }
}

const mapStateToProps = (state) => ({
    subjects: state.subject
})

export default connect(mapStateToProps, { getSubjects })(List)
