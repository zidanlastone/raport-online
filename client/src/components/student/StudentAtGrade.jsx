import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";

import {
  getStudentsByGrade,
  clearStudent
} from "../../redux/actions/studentsActions";
import { Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loading from "../loader/Loading";

const StudentAtGradeList = lazy(() => import("./StudentAtGradeList"));
const CheckBoxStudentList = lazy(() => import("./CheckBoxStudentList"));

const loading = () => <Loading />;
export class StudentAtGrade extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getStudentsByGrade(id);
  }

  componentDidUpdate(prevProps, prevState) {
    let id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      this.props.getStudentsByGrade(id);
    }
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  render() {
    const { students_by_grade } = this.props.students;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
              <FontAwesomeIcon icon="plus" />
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
              <CheckBoxStudentList
                onAddStudentToGrade={this.props.addStudents}
              />
            </Accordion.Collapse>
          </Accordion>
          <StudentAtGradeList students={students_by_grade} />
        </div>
      </Suspense>
    );
  }
}
const mapStateToProps = state => ({
  students: state.students
});
export default connect(
  mapStateToProps,
  { getStudentsByGrade, clearStudent }
)(StudentAtGrade);
