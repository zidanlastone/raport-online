import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import {
  getStudentDetail,
  clearStudent
} from "../../redux/actions/studentsActions";

class StudentDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getStudentDetail(id);
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  render() {
    const { detail } = this.props.students;
    return (
      <div className="container-fluid mt-4">
        <h3>Student Detail</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <img
                      style={{ width: 80, height: 80, margin: 10 }}
                      src={`/assets/image/`}
                    />
                  </Col>
                  <Col>
                    <div>
                      Name: {detail.name} <br />
                      NIS: {detail.nis} <br />
                      NISN: {detail.nisn}
                    </div>
                  </Col>
                </Row>
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
  scores: state.scores
});

export default connect(
  mapStateToProps,
  { getStudentDetail, clearStudent }
)(StudentDetail);
