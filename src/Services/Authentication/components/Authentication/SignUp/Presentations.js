import React, { useState } from "react";
import SasiLogo from "../../../../../Assets/Sasi.png";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Snackbar,
  Paper,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  CssBaseline,
  Container,
} from "@material-ui/core";
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
    auth
  } = props;

  return (
    <div className={classes.backGroundSignIn}>
      {auth.uid ? <Redirect to="/" /> : null}
      <div className={classes.signUp}>
        <Paper elevation={24}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
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
