import React, { lazy, Suspense } from "react";
import { Accordion, Button, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";

import {
  addStudents,
  getStudents,
  deleteStudent
} from "../../redux/actions/studentsActions";

import Loading from "../loader/Loading";

const StudentAdd = lazy(() => import("./StudentAdd"));

const List = lazy(() => import("./List"));

const ConfirmModal = lazy(() => import("../modals/ConfirmModal"));

const loading = () => <Loading />;

class Student extends React.Component {
  state = {
    modalValue: "",
    modalShow: false
  };

  componentDidMount() {
    this.props.getStudents();
  }

  wantToDeleteStudent = value => {
    this.setState({
      modalValue: value,
      modalShow: true
    });
  };

  onDeleteStudent = id => {
    this.props.deleteStudent(id);
    this.setState({
      modalValue: "",
      modalShow: ""
    });
  };

  render() {
    const { students } = this.props.students;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
              <FontAwesomeIcon icon="plus" />
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
              <StudentAdd onAddStudent={this.props.addStudents} />
            </Accordion.Collapse>
          </Accordion>
          <Row className="mt-3">
            <Col>
              <List
                students={students}
                wantToDeleteStudent={this.wantToDeleteStudent}
              />
            </Col>
          </Row>
          <ConfirmModal
            showModal={this.state.modalShow}
            value={this.state.modalValue}
            handleConfirm={this.onDeleteStudent}
            handleClose={() =>
              this.setState({
                modalShow: false
              })
            }
          />
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
  { addStudents, getStudents, deleteStudent }
)(Student);
