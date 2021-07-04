import React, { Component } from "react";
import XLSX from "xlsx";
import { SheetJSFT } from "./types";
import firebase from "../../../../config/fbConfig";
class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      getData: [],
      isFeesDue: false,
      feeDetatils: {
        totalFees: "85000",
        feesDue: "10000",
        feesPaid: "75000"
      }
    };
  }
  handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

  handleFile = () => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      this.setState({ data: data }, () => {
        JSON.stringify(
          this.state.data.map((item) => {
            return firebase
              .firestore()
              .collection("STUDENTS")
              .doc(item.RegNo)
              .set({
                ...item
              })
              .then(() => {
                console.log("Data created");
              })
              .catch((error) => {
                console.log(error);
              });
          })
        );
      });
    };
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGetData}>Get</button>
        <label htmlFor="file">Upload an excel to Process Triggers</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />
        <br />


        <input
          type="submit"
          value="Process Triggers"
          onClick={this.handleFile}
        />
        {this.state.data !== null &&
          this.state.data.map((item) => console.log("regtable", item.RegNo))}
      </div>
    );
  }
}

export default ExcelReader;
