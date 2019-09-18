import React, { Component, lazy,Suspense } from 'react'
import {connect} from 'react-redux'

import {
    Card,
    Button
} from 'react-bootstrap'

import Loading from "../loader/Loading";

import {
    getStudents,
    getStudentsByGrade
} from '../../redux/actions/studentsActions'

import {
    getGrades
} from '../../redux/actions/gradeActions'

import {
    getSubjects
} from '../../redux/actions/subjectActions'

import {
    getCompetencyBySubject
} from '../../redux/actions/competencyActions'


const SelectData = lazy(()=>import('./SelectData'));
const ScoreForm = lazy(()=> import('./ScoreForm'));

const loading = () => <Loading />;
class Scores extends Component {

    state = {
        gradeId: '',
        subject: ''
    }

    componentDidMount(){
        this.props.getGrades();
        this.props.getSubjects();
        this.props.getStudents();
    }


    componentDidUpdate(prevProps, prevState){
        if(this.state.gradeId !== prevState.gradeId) {
            this.props.getStudentsByGrade(this.state.gradeId);
        }
        if (this.state.subject !== prevState.subject){
            this.props.getCompetencyBySubject(this.state.subject);
        }   
    }


    setParams = (params) => {
        this.setState({
            gradeId: params.grade,
            subject: params.subject
        });
    }

    render() {
        const { grades } = this.props.grade;
        const { subjects } = this.props.subject;
        const {students} = this.props.students;
        return (
            <Suspense fallback={loading()}>
                <div className="container-fluid mt-3">
                    <SelectData 
                    onSelectData={this.setParams} 
                    grades={grades} 
                    subjects={subjects}
                    />

                    <Card className="mt-4">
                        <Card.Body>
                        {
                            students.map((s,i)=>(
                                <ScoreForm key={i} student={s}/>
                            ))
                        }
                        </Card.Body>
                    </Card>
                </div>
            </Suspense>
        )
    }
}

const mapStateToProps = (state) => ({
    students : state.students,
    grade: state.grade,
    subject: state.subject
})
export default connect(
    mapStateToProps, { getStudentsByGrade, getGrades, getSubjects, getCompetencyBySubject, getStudents})(Scores);
