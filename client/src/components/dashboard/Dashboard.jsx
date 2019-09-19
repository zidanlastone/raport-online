import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStudents } from "../../redux/actions/studentsActions";
import { getTeachers } from "../../redux/actions/teacherActions";
import { getSubjects } from "../../redux/actions/subjectActions";
import { getGrades } from "../../redux/actions/gradeActions";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getTeachers();
    this.props.getSubjects();
    this.props.getGrades();
  }
  render() {
    const { students } = this.props.students;
    const { teachers } = this.props.teachers;
    const { subjects } = this.props.subject;
    const { grades } = this.props.grade;

    return (
      <div className="container-fluid mt-3">
        <Row>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <h3>
                  <FontAwesomeIcon icon="users" />
                  <span className="p-3">{students.length}</span>
                </h3>
                <h4>Students</h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <h3>
                  <FontAwesomeIcon icon="graduation-cap" />
                  <span className="p-3">{teachers.length}</span>
                </h3>
                <h4>Teachers</h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <h3>
                  <FontAwesomeIcon icon="book" />
                  <span className="p-3">{subjects.length}</span>
                </h3>
                <h4>Subject</h4>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <h3>
                  <FontAwesomeIcon icon="school" />
                  <span className="p-3">{grades.length}</span>
                </h3>
                <h4>Grades</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
  teachers: state.teachers,
  grade: state.grade,
  subject: state.subject
});
export default connect(
  mapStateToProps,
  { getStudents, getTeachers, getSubjects, getGrades }
)(Dashboard);
