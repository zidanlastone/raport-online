import React, { Suspense } from "react";
import Loading from "../loader/Loading";

import MaterialTable from "material-table";

const loading = () => <Loading />;

const GradeList = props => {
  const { grades } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Grade List"
        columns={[
          { title: "Grade Name", field: "gradeName" },
          { title: "Departement Name", field: "departement.departementName" },
          { title: "Homeroom Teacher Name", field: "teacher.teacherName" }
        ]}
        data={grades}
        actions={[
          rowData => ({
            icon: "edit",
            tooltip: "Edit Grade",
            onClick: (e, rowData) =>
              console.log("edit student" + rowData.subjectName)
          }),
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
