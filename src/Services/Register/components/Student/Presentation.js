import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
function Presentation({ peopleData }) {
  console.log(peopleData);
  return (
    <div style={{ padding: "100px" }}>
      <Button variant="contained">
        <Link style={{ textDecoration: "none" }} to="/data">
          Go to data
        </Link>
      </Button>
      {peopleData !== null ? (
        <table>
          <thead>
            <tr>
              <th>RegNo</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>NoOfBacklogs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{peopleData.RegNo}</td>
              <td>{peopleData.FirstName}</td>
              <td>{peopleData.LastName}</td>
              <td>{peopleData.NoOfBacklogs}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default Presentation;
