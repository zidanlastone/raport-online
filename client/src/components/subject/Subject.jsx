import React, { lazy, Suspense } from "react";
import { getTeachers } from "../../redux/actions/teacherActions";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import {
  addSubject,
  getSubjects,
  deleteSubject
} from "../../redux/actions/subjectActions";

import Loading from "../loader/Loading";
const List = lazy(() => import("./List"));
const SubjectAdd = lazy(() => import("./SubjectAdd"));
const ConfirmModal = lazy(() => import("../modals/ConfirmModal"));

const loading = () => <Loading />;

class Subject extends React.Component {
  state = {
    modalValue: "",
    modalShow: false
  };

  componentDidMount() {
    this.props.getTeachers();
    this.props.getSubjects();
  }

  wantToDelete = value => {
    this.setState({
      modalValue: value,
      modalShow: true
    });
  };

  onDeleteSubject = id => {
    this.props.deleteSubject(id);
    this.setState({
      modalValue: "",
      modalShow: false
    });
  };

  render() {
    const { teachers } = this.props.teachers;
    const { subjects } = this.props.subject;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
              <FontAwesomeIcon icon="plus" />
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
              <SubjectAdd
                onAddSubject={this.props.addSubject}
                teachers={teachers}
              />
            </Accordion.Collapse>
          </Accordion>
          <Row className="mt-3">
            <Col>
              <List subject={subjects} wantToDelete={this.wantToDelete} />
            </Col>
          </Row>

          <ConfirmModal
            showModal={this.state.modalShow}
            value={this.state.modalValue}
            handleConfirm={this.onDeleteSubject}
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
  teachers: state.teachers,
  subject: state.subject
});

export default connect(
  mapStateToProps,
  { getTeachers, addSubject, getSubjects, deleteSubject }
)(Subject);
