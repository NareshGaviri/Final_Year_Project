import React from "react";
import { CustomField } from "../../../../../shared/TextFields";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Snackbar,
  Paper,
  Container,
  CssBaseline,
} from "@material-ui/core";
import SasiLogo from "../../../../../Assets/Sasi.png";
import { useStyles } from "../../../styles/styles";
import { Grid } from "@material-ui/core";
import { validations } from "../../../../../shared/validations";
function Presentation(props) {
  const classes = useStyles();
  const { handleChange, handleSubmit, email } = props;
  return (
    <div className={classes.backGroundSignIn}>
      <div className={classes.signIn}>
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
                  id="email"
                  type="email"
                  label="Email"
                  required
                  value={email}
                  handleChange={handleChange}
                />
                <br />
                <CardActions>
                  {validations.checkEmail(email) ? (
                    <Button variant="contained" type="submit" color="primary">
                      Send Email
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      disabled
                      type="submit"
                      color="primary"
                    >
                      Email
                    </Button>
                  )}
                  <Grid item xs>
                    <Link to="/signin" variant="body2">
                      <Button variant="contained" type="submit" color="primary">
                        Cancel
                      </Button>
                    </Link>
                  </Grid>
                </CardActions>
              </form>
            </div>
          </Container>
        </Paper>
      </div>
    </div>
  );
}

export default Presentation;
