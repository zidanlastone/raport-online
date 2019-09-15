import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loading from "../loader/Loading";

import { getSubjects } from "../../redux/actions/subjectActions";

import {
  getCompetencyBySubject,
  addCompetency,
  deleteCompetency
} from "../../redux/actions/competencyActions";
import AddCompetency from "./AddCompetency";

const List = lazy(() => import("./List"));
const SelectSubject = lazy(() => import("./SelectSubject"));
const ConfirmModal = lazy(() => import("../modals/ConfirmModal"));
const loading = () => <Loading />;

class Competency extends React.Component {
  state = {
    modalValue: "",
    modalShow: false,
    subjectId: ""
  };

  componentDidMount() {
    this.props.getSubjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.subjectId !== prevState.subjectId) {
      this.props.getCompetencyBySubject(this.state.subjectId);
    }
  }

  onSelectSubject = subject => {
    this.setState({
      subjectId: subject
    });
  };

  onAddCompetency = value => {
    // this.props.addCompetency(value);
    console.log(value);
  };

  wantToDelete = value => {
    this.setState({
      modalValue: value,
      modalShow: true
    });
  };

  onDeleteCompetency = id => {
    this.props.deleteCompetency(id);
    this.setState({
      modalValue: "",
      modalShow: false
    });
  };

  render() {
    const { subjects } = this.props.subject;
    const { competency } = this.props.competency;
    return (
      <Suspense fallback={loading()}>
        <div className="container-fluid mt-5">
          <SelectSubject
            subjects={subjects}
            onSelectSubject={this.onSelectSubject}
          />
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
              <FontAwesomeIcon icon="plus" />
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
              <AddCompetency
                subjectId={this.state.subjectId}
                onAddCompetency={this.props.addCompetency}
              />
            </Accordion.Collapse>
          </Accordion>

          <div className="mt-3">
            <List competency={competency} wantToDelete={this.wantToDelete} />
          </div>

          <ConfirmModal
            showModal={this.state.modalShow}
            value={this.state.modalValue}
            handleConfirm={this.onDeleteCompetency}
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
  subject: state.subject,
  competency: state.competency
});

export default connect(
  mapStateToProps,
  { getCompetencyBySubject, getSubjects, addCompetency, deleteCompetency }
)(Competency);
