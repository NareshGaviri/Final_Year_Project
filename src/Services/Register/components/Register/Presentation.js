import React from "react";
import MaterialTable from "material-table";
function Presentation({ people }) {
  console.log(people);

  const tableColumns = [
    { field: "RegNo", title: "RegNo" },
    { field: "FirstName", title: "FirstName" },
    { field: "LastName", title: "LastName" },
    { field: "Branch", title: "Branch" },
    { field: "NoOfBacklogs", title: "NoOfBacklogs" },
    { field: "Role", title: "Role" },
  ];
  const title = "ACADAMIC_DATA";
  let usersInfoData = [];
  if (people) {
    people.map((item) => {
      console.log(item.RegNo);
      console.log(item.FirstName);
      console.log(item);
      if (item.Role === "Admin") {
        usersInfoData.push({
          RegNo: item.RegNo,
          FirstName: item.FirstName,
          LastName: item.LastName,
          Branch: item.Branch,
          NoOfBacklogs: item.NoOfBacklogs,
          Role: item.Role,
        });
      }
      return null;
    });
  }
  return (
    <div>
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
