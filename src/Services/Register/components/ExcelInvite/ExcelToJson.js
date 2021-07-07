import React, { Component } from "react";
import XLSX from "xlsx";
import { SheetJSFT } from "./types";
import firebase from "../../../../config/fbConfig";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import useStyles from "./styles/styles";
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
        feesPaid: "75000",
      },
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
        bookVBA: true,
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
                ...item,
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

  handleFileData = () => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      this.setState({ data: data }, () => {
        JSON.stringify(
          this.state.data.map((item) => {
            return firebase
              .firestore()
              .collection("ACADAMIC")
              .doc(item.RegNo)
              .set({
                ...item,
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

  handleFileDataFees = () => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      this.setState({ data: data }, () => {
        JSON.stringify(
          this.state.data.map((item) => {
            return firebase
              .firestore()
              .collection("FEES")
              .doc(item.RegNo)
              .set({
                ...item,
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
      <div style={{ padding: "100px",position:"absolute" }}>
        {/* <marquee style={{ width: "60%", direction: "left", height: "100px" }}>
          Student data
        </marquee> */}
        <br />
        {this.state.data !== null &&
          this.state.data.map((item) => console.log("regtable", item.RegNo))}
        <br />
        <br />
        <div style={{ width: "650px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Personal Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                type="file"
                variant="outlined"
                className="form-control"
                id="file"
                accept={SheetJSFT}
                onChange={this.handleChange}
              />
              <div style={{ marginLeft: "100px" }}>
                <Button
                  type="submit"
                  value="Process Triggers"
                  onClick={this.handleFile}
                  variant="contained"
                  color="primary"
                >
                  Add Personal Data
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <br />
        <div style={{ width: "650px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Acadamic Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                type="file"
                variant="outlined"
                className="form-control"
                id="file"
                accept={SheetJSFT}
                onChange={this.handleChange}
              />
              <div style={{ marginLeft: "100px" }}>
                <Button
                  type="submit"
                  value="Process Triggers"
                  onClick={this.handleFileData}
                  variant="contained"
                  color="primary"
                >
                  Add Acadamic Data
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>

          <br />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Add Fees Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                type="file"
                variant="outlined"
                className="form-control"
                id="file"
                accept={SheetJSFT}
                onChange={this.handleChange}
              />
              <div style={{ marginLeft: "100px" }}>
                <Button
                  type="submit"
                  value="Process Triggers"
                  onClick={this.handleFileDataFees}
                  variant="contained"
                  color="primary"
                >
                  Add Fees Data
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default ExcelReader;
