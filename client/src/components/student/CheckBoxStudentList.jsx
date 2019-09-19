import React, { Suspense } from "react";
import Loading from "../loader/Loading";
import MaterialTable from "material-table";

import { connect } from "react-redux";

import { getStudents, clearStudent } from "../../redux/actions/studentsActions";

const loading = () => <Loading />;

class CheckBoxStudentList extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  render() {
    const { students } = this.props.students;
    return (
      <Suspense fallback={loading()}>
        <MaterialTable
          title="Student List"
          columns={[
            // {
            //   title: "Photo",
            //   field: "image",
            //   render: rowData => (
            //     <img
            //       src={"/assets/image/" + rowData.image}
            //       style={{ width: 80, height: 80 }}
            //       alt={rowData.image}
            //     />
            //   )
            // },
            { title: "Name", field: "name" },
            { title: "NIS", field: "nis" },
            { title: "NISN", field: "nisn" },
            { title: "Gender", field: "gender" },
            { title: "Birth place", field: "birthLocation" },
            { title: "Birth date", field: "birthDate" }
          ]}
          data={students}
          options={{
            selection: true
          }}
        />
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students
});
export default connect(
  mapStateToProps,
  { getStudents, clearStudent }
)(CheckBoxStudentList);
