import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { db } from "../../../../../config/fbConfig";
function Presentation({ people }) {
  const tableColumns = [
    {
      field: "RegNo",
      title: "RegNo",
      dataType: "String",
    },

    { field: "FirstName", title: "FirstName" },
    { field: "LastName", title: "LastName" },
    { field: "Branch", title: "Branch" },
    { field: "Backlogs", title: "NoOfBacklogs"},
    { field: "Role", title: "Role" },
    {field:"Address",title:"Address"}
  ];
  const title = "STUDENT DATA";
  let usersInfoData = [];
  if (people) {
    people.map((item) => {
      console.log(item.Backlogs)
      usersInfoData.push({
        RegNo: item.RegNo,
        FirstName: item.FirstName,
        LastName: item.LastName,
        Branch: item.Branch,
        Backlogs: item.Backlogs,
        Role: item.Role,
        Address: item.Address
      });
      return null;
    });
  }
  const [state, setState] = useState(people);
  return (
    <div
      style={{ marginLeft: "100px", marginRight: "70px", marginTop: "170px",position:"absolute" }}
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
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setState([...state, newData]);
                console.log(newData);
                console.log(newData.RegNo);
                db.collection("STUDENTS")
                  .doc(newData.RegNo)
                  .set(newData)
                  .then((res) => {
                    console.log(res);
                    alert("data added successfully");
                    resolve();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...state];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setState([...dataUpdate]);
                const { RegNo} =  newData
                db.collection("STUDENTS").doc(RegNo).set(newData,{merge: true}).then((res)=>{
                  console.log(res)

                  alert("Data updated successfully");
                }).catch((error)=>{
                  console.log(error)
                })
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...state];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setState([...dataDelete]);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}

export default Presentation;
