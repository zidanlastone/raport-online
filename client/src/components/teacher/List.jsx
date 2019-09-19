import React, { Suspense } from "react";
import Loading from "../loader/Loading";
import MaterialTable from "material-table";

const loading = () => <Loading />;

const List = props => {
  const { teachers } = props;
  return (
    <Suspense fallback={loading()}>
      <MaterialTable
        title="Teacher List"
        columns={[
          { title: "NIP", field: "nip" },
          { title: "Teacher Name", field: "teacherName" }
        ]}
        data={teachers}
        actions={[
          rowData => ({
            icon: "delete",
            tooltip: "Delete Teacher",
            onClick: (e, rowData) => {
              props.wantToDelete({
                id: rowData.id,
                body: "Delete taecher with name ",
                target: rowData.teacherName
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
