import React from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
function Presentation({ people }) {
  console.log(people);

  const tableColumns = [
    {
      field: "RegNo",
      title: "RegNo",
      datatYPE: "String",
      render: (rowData) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={"/Student/" + rowData.RegNo}
          >
            {rowData.RegNo}
          </Link>
        );
      },
    },

    { field: "FirstName", title: "FirstName" },
    { field: "LastName", title: "LastName" },
    { field: "Branch", title: "Branch" },
    { field: "NoOfBacklogs", title: "NoOfBacklogs" },
    { field: "Role", title: "Role" },
    { field: "Address", title: "Address" },
  ];

  const title = "ACADAMIC_DATA";
  let usersInfoData = [];
  if (people) {
    people.length &&
      people.map((item) => {
        usersInfoData.push({
          RegNo: item.RegNo,
          FirstName: item.FirstName,
          LastName: item.LastName,
          Branch: item.Branch,
          NoOfBacklogs: item.Backlogs,
          Role: item.Role,
          Address: item.Address,
        });
        return null;
      });
  }
  return (
    <div
      style={{
        marginLeft: "100px",
        marginRight: "70px",
        marginTop: "170px",
        position: "absolute",
      }}
    >
      <MaterialTable
        title={title}
        columns={tableColumns}
        data={usersInfoData}
        options={{
          filtering: true,
          search: true,
          selection: true,
          exportButton: true,
        }}
      />
    </div>
  );
}

export default Presentation;
