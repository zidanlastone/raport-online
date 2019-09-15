import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  addTeacher,
  getTeachers,
  deleteTeacher
} from "../../redux/actions/teacherActions";

import Loading from "../loader/Loading";
const List = lazy(() => import("./List"));
const TeacherAdd = lazy(() => import("./TeacherAdd"));
const ConfirmModal = lazy(() => import("../modals/ConfirmModal"));

const loading = () => <Loading />;

class Teacher extends React.Component {
  state = {
    modalValue: "",
    modalShow: false
  };

  componentDidMount() {
    this.props.getTeachers();
  }

  wantToDelete = value => {
    this.setState({
      modalValue: value,
      modalShow: true
    });
  };

  onDeleteTeacher = id => {
    this.props.deleteTeacher(id);
    this.setState({
      modalValue: "",
      modalShow: false
    });
  };

  render() {
    const { teachers } = this.props.teachers;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
              <FontAwesomeIcon icon="plus" />
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
              <TeacherAdd onAddTeacher={this.props.addTeacher} />
            </Accordion.Collapse>
          </Accordion>
          <Row className="mt-3">
            <Col>
              <List teachers={teachers} wantToDelete={this.wantToDelete} />
            </Col>
          </Row>
          <ConfirmModal
            showModal={this.state.modalShow}
            value={this.state.modalValue}
            handleConfirm={this.onDeleteTeacher}
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
  teachers: state.teachers
});

export default connect(
  mapStateToProps,
  { getTeachers, addTeacher, deleteTeacher }
)(Teacher);
