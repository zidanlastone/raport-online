import React, { Suspense } from "react";
import Loading from "../loader/Loading";

import MaterialTable from "material-table";

const loading = () => <Loading />;

const DepartementList = props => {
  const { departement } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Departement List"
        columns={[{ title: "Departement Name", field: "departementName" }]}
        data={departement}
        actions={[
          rowData => ({
            icon: "edit",
            tooltip: "Edit Subject",
            onClick: (e, rowData) =>
              console.log("edit student" + rowData.subjectName)
          }),
          rowData => ({
            icon: "delete",
            tooltip: "Delete Departement",
            onClick: (e, rowData) => {
              props.wantToDelete({
                id: rowData.id,
                body: "Delete Departement with name ",
                target: rowData.departementName
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

export default DepartementList;
