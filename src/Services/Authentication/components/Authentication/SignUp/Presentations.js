import React, { useState } from "react";
import SasiLogo from "../../../../../Assets/Sasi.png";
import {
  CardActions,
  Button,
  Snackbar,
  Paper,
  CssBaseline,
  Container,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import MuiAlert from "@material-ui/lab/Alert";
import { useStyles } from "../../../styles/styles";

import { CustomField } from "../../../../../shared/TextFields";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Presentations(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const {
    handleChange,
    handleSubmit,
    email,
    password,
    fName,
    lName,
    authSignUp,
    signUp,
    role,
    auth,
    rollNumber,
    onChangeAlphaNumericInput,
  } = props;

  return (
    <div className={classes.backGroundSignUp}>
      {auth.uid ? <Redirect to="/" /> : null}
      <div className={classes.signUp}>
        <Paper elevation={24}>
          <Container component="main">
            <CssBaseline />
            <div className={classes.paper1}>
              <img
                src={SasiLogo}
                className={classes.sasiLogo}
                alt="SASI_LOGO"
              />
              <form onSubmit={handleSubmit} className={classes.form}>
                <CustomField
                  type="name"
                  required
                  label="FirstName"
                  id="fName"
                  name="fName"
                  value={fName}
                  handleChange={handleChange}
                />
                <br />
                <br />
                <CustomField
                  type="name"
                  required
                  label="LastName"
                  id="lName"
                  name="lName"
                  value={lName}
                  handleChange={handleChange}
                />
                <br />
                <br />
                <CustomField
                  type="email"
                  label="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  handleChange={handleChange}
                />

                <br />

                <CustomField
                  id="password"
                  required
                  type="password"
                  label="Password"
                  value={password}
                  handleChange={handleChange}
                />
                <br />
                <CustomField
                  id="role"
                  required
                  type="name"
                  label="Role"
                  value={role}
                  handleChange={handleChange}
                />
                <br />
                <br />
                <TextField
                  id="rollNumber"
                  required
                  size="small"
                  variant="outlined"
                  name="rollNumber"
                  type="alphanumeric"
                  label="Roll Number"
                  value={rollNumber}
                  onChange={handleChange}
                  inputProps={{ style: { width: 350 } }}
                />

                <br />
                <br />
                <CardActions>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleClick}
                  >
                    Signup
                  </Button>
                  {signUp ? (
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} severity="success">
                        {authSignUp}
                      </Alert>
                    </Snackbar>
                  ) : (
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} severity="error">
                        failure
                      </Alert>
                    </Snackbar>
                  )}
                  <Link to="/signin">
                    <Button variant="contained" type="submit" color="primary">
                      Cancel
                    </Button>
                  </Link>
                </CardActions>
              </form>
            </div>
          </Container>
        </Paper>
      </div>
    </div>
  );
}

export default Presentations;
