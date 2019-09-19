import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";

import { Card, Form } from "react-bootstrap";

import Loading from "../loader/Loading";

import {
  getStudentsByGrade,
  clearStudent
} from "../../redux/actions/studentsActions";

import { getGrades } from "../../redux/actions/gradeActions";

import { getSubjects } from "../../redux/actions/subjectActions";

import { getCompetencyBySubject } from "../../redux/actions/competencyActions";
import { addScores } from "../../redux/actions/scoreActions";
const SelectData = lazy(() => import("./SelectData"));
const ScoreForm = lazy(() => import("./ScoreForm"));

const loading = () => <Loading />;
class Scores extends Component {
  state = {
    gradeId: "",
    subject: "",
    subjectCompetency: "",
    studentsWithScore: []
  };

  componentDidMount() {
    this.props.getGrades();
    this.props.getSubjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.gradeId !== prevState.gradeId) {
      this.props.getStudentsByGrade(this.state.gradeId);
    }
    if (this.state.subject !== prevState.subject) {
      this.props.getCompetencyBySubject(this.state.subject);
    }
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  setParams = params => {
    this.setState({
      gradeId: params.grade,
      subject: params.subject
    });
  };

  handleChangeParent = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  setCompetency = e => {
    e.preventDefault();
    this.setState({
      subjectCompetency: e.target.value
    });
  };

  setStudentWithScore = params => {
    this.setState({
      studentsWithScore: [...this.state.studentsWithScore, params]
    });
    this.props.addScores(params);
  };

  render() {
    const { grades } = this.props.grade;
    const { subjects } = this.props.subject;
    const { students_by_grade } = this.props.students;
    const { competency } = this.props.competency;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-3">
          <SelectData
            onSelectData={this.setParams}
            grades={grades}
            subjects={subjects}
            params={this.state}
            handleChange={this.handleChangeParent}
          />

          {this.state.subject !== "" ? (
            <Card className="mt-3">
              <Card.Body>
                <Form.Group>
                  <Form.Label>Select Competency</Form.Label>
                  <select
                    className="form-control"
                    name="competency"
                    onChange={this.setCompetency}
                  >
                    <option>Select Competency</option>
                    {competency.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.competencyName}
                      </option>
                    ))}
                  </select>
                </Form.Group>
              </Card.Body>
            </Card>
          ) : null}

          {this.state.gradeId !== "" ? (
            <Card className="mt-4">
              <Card.Body>
                {students_by_grade.map((s, i) => (
                  <ScoreForm
                    key={i}
                    student={s}
                    competency={this.state.subjectCompetency}
                    addToScore={this.setStudentWithScore}
                  />
                ))}
              </Card.Body>
            </Card>
          ) : null}
        </div>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
  grade: state.grade,
  subject: state.subject,
  competency: state.competency
});
export default connect(
  mapStateToProps,
  {
    getStudentsByGrade,
    getGrades,
    getSubjects,
    getCompetencyBySubject,
    clearStudent,
    addScores
  }
)(Scores);
