import React, { Suspense } from "react";
import Loading from "../loader/Loading";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
const loading = () => <Loading />;

const List = props => {
  const { students } = props;
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
          {
            title: "Name",
            field: "name",
            render: rowData => (
              <Link to={"/admin/student/detail/" + rowData.id}>
                {rowData.name}
              </Link>
            )
          },
          { title: "NIS", field: "nis" },
          { title: "NISN", field: "nisn" },
          { title: "Gender", field: "gender" },
          { title: "Birth place", field: "birthLocation" },
          { title: "Birth date", field: "birthDate" }
        ]}
        data={students}
        actions={[
          rowData => ({
            icon: "delete",
            tooltip: "Delete Student",
            onClick: (e, rowData) => {
              props.wantToDeleteStudent({
                id: rowData.id,
                body: "Delete student with name ",
                target: rowData.name
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
