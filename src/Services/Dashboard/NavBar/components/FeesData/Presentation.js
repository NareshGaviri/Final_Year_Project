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

    { field: "TotalFee", title: "TotalFee" },
    { field: "PaidFee", title: "PaidFee" },
    { field: "DueFee", title: "DueFee" },
    { field: "Email", title: "Email" },
    { field: "LibraryFee", title: "LibraryFee" },
    { field: "Address", title: "Address" },
  ];
  const title = "FEES DATA";
  let usersInfoData = [];
  if (people) {
    people.length &&
      people.map((item) => {
        console.log(item.Backlogs);
        usersInfoData.push({
          RegNo: item.RegNo,
          TotalFee: item.TotalFee,
          PaidFee: item.PaidFee,
          DueFee: item.DueFee,
          Email: item.Email,
          LibraryFee: item.LibraryFee,
          Address: item.Address,
        });
        return null;
      });
  }
  const [state, setState] = useState(people);
  return (
    <div
      style={{
        marginLeft: "90px",
        marginRight: "70px",
        marginTop: "170px",
        position: "absolute",
        width:"1600px"
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
                const { RegNo } = newData;
                db.collection("STUDENTS")
                  .doc(RegNo)
                  .set(newData, { merge: true })
                  .then((res) => {
                    console.log(res);

                    alert("Data updated successfully");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
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
