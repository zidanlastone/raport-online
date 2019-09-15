import React, { Suspense, lazy, Component } from "react";
import { connect } from "react-redux";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../loader/Loading";

import {
  getDepartement,
  addDepartement,
  deleteDepartement
} from "../../redux/actions/departementAction";
import {
  getGrades,
  addGrade,
  deleteGrade
} from "../../redux/actions/gradeActions";

import { getTeachers } from "../../redux/actions/teacherActions";

const AddGrade = lazy(() => import("./AddGrade"));
const GradeList = lazy(() => import("./GradeList"));
const AddDepartement = lazy(() => import("./AddDepartement"));
const DepartementList = lazy(() => import("./DepartementList"));
const ConfirmModal = lazy(() => import("../modals/ConfirmModal"));

class Grades extends Component {
  state = {
    modalValueDepartement: "",
    modalShowDepartement: false,
    modalValueGrade: "",
    modalShowGradet: false
  };

  componentDidMount() {
    this.props.getDepartement();
    this.props.getGrades();
    this.props.getTeachers();
  }

  wantToDeleteDepartement = value => {
    this.setState({
      modalValueDepartement: value,
      modalShowDepartement: true
    });
  };

  wantToDeleteGrade = value => {
    this.setState({
      modalValueGrade: value,
      modalShowGrade: true
    });
  };

  onDeleteDepartement = id => {
    this.props.deleteDepartement(id);
    this.setState({
      modalValueDepartement: "",
      modalShowDepartement: false
    });
  };

  onDeleteGrade = id => {
    this.props.deleteGrade(id);
    this.setState({
      modalValueGrade: "",
      modalShowGrade: false
    });
  };

  render() {
    const loading = () => <Loading />;

    const { teachers } = this.props.teachers;
    const { departement } = this.props.departement;
    const { grades } = this.props.grade;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-3">
          <Row>
            <Col md={4} className="mb-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Button}>
                  <FontAwesomeIcon icon="plus" /> Add Departement
                </Accordion.Toggle>
                <Accordion.Collapse className="mt-2">
                  <AddDepartement
                    onSaveDepartement={this.props.addDepartement}
                  />
                </Accordion.Collapse>
              </Accordion>
              <div className="mt-3">
                <DepartementList
                  departement={departement}
                  wantToDelete={this.wantToDeleteDepartement}
                />
              </div>
            </Col>
            <Col md={8} className="md-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Button}>
                  <FontAwesomeIcon icon="plus" /> Add Grade
                </Accordion.Toggle>
                <Accordion.Collapse className="mt-2">
                  <AddGrade
                    teachers={teachers}
                    departement={departement}
                    onSaveGrade={this.props.addGrade}
                  />
                </Accordion.Collapse>
              </Accordion>
              <div className="mt-3">
                <GradeList
                  grades={grades}
                  wantToDelete={this.wantToDeleteGrade}
                />
              </div>
            </Col>
          </Row>
          <ConfirmModal
            showModal={this.state.modalShowDepartement}
            value={this.state.modalValueDepartement}
            handleConfirm={this.onDeleteDepartement}
            handleClose={() =>
              this.setState({
                modalShowDepartement: false
              })
            }
          />
          <ConfirmModal
            showModal={this.state.modalShowGrade}
            value={this.state.modalValueGrade}
            handleConfirm={this.onDeleteGrade}
            handleClose={() =>
              this.setState({
                modalShowGrade: false
              })
            }
          />
        </div>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  grade: state.grade,
  departement: state.departement,
  teachers: state.teachers
});
export default connect(
  mapStateToProps,
  {
    getDepartement,
    addDepartement,
    deleteDepartement,
    getGrades,
    addGrade,
    deleteGrade,
    getTeachers
  }
)(Grades);
