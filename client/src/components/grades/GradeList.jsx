import React, { Suspense } from "react";
import Loading from "../loader/Loading";
import { Link } from "react-router-dom";

import MaterialTable from "material-table";

const loading = () => <Loading />;

const GradeList = props => {
  const { grades } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Grade List"
        columns={[
          {
            title: "Grade Name",
            field: "gradeName",
            render: rowData => (
              <Link to={"/admin/grades/" + rowData.id}>
                {" "}
                {rowData.gradeName}{" "}
              </Link>
            )
          },
          { title: "Departement Name", field: "departement.departementName" },
          { title: "Homeroom Teacher Name", field: "teacher.teacherName" }
        ]}
        data={grades}
        actions={[
          rowData => ({
            icon: "delete",
            tooltip: "Delete Grade",
            onClick: (e, rowData) => {
              props.wantToDelete({
                id: rowData.id,
                body: "Delete Grade with name ",
                target: rowData.gradeName
              });
            }
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    </Suspense>
  );
};

export default GradeList;
