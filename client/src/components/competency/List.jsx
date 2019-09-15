import React, { Suspense } from "react";
import Loading from "../loader/Loading";

import MaterialTable from "material-table";

const loading = () => <Loading />;

const List = props => {
  const { competency } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Competency List"
        columns={[
          { title: "Competency Name", field: "competencyName" },
          { title: "Semester", field: "semester" },
          { title: "KKM", field: "kkm" }
        ]}
        data={competency}
        actions={[
          rowData => ({
            icon: "edit",
            tooltip: "Edit Subject",
            onClick: (e, rowData) =>
              console.log("edit student" + rowData.subjectName)
          }),
          rowData => ({
            icon: "delete",
            tooltip: "Delete Competency",
            onClick: (e, rowData) => {
              props.wantToDelete({
                id: rowData.id,
                body: "Delete competency with name ",
                target: rowData.competencyName
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
