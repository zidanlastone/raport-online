import React, { Suspense } from "react";
import Loading from "../loader/Loading";

import MaterialTable from "material-table";

const loading = () => <Loading />;

const List = props => {
  const { subject } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Subject List"
        columns={[
          { title: "Subject Name", field: "subjectName" },
          { title: "Teacher Name", field: "teacher.teacherName" }
        ]}
        data={subject}
        actions={[
          rowData => ({
            icon: "edit",
            tooltip: "Edit Subject",
            onClick: (e, rowData) =>
              console.log("edit student" + rowData.subjectName)
          }),
          rowData => ({
            icon: "delete",
            tooltip: "Delete Subject",
            onClick: (e, rowData) => {
              props.wantToDelete({
                id: rowData.id,
                body: "Delete subject with name ",
                target: rowData.subjectName
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

export default List;
