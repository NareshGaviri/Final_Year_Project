import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";
import SasiLogo from "../../../../../Assets/Sasi.png";
import { useStyles } from "../../../styles/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CustomField } from "../../../../../shared/TextFields";
import { validations } from "../../../../../shared/validations";
import { Paper } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

function Presentation(props) {
  const classes = useStyles();
  const { handleChange, handleSubmit, auth, email, password } = props;

  return (
    <div className={classes.backGroundSignIn}>
      {auth.uid ? <Redirect to="/" /> : null}

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
                  type="email"
                  label="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  handleChange={handleChange}
                />
                <br />
                <CustomField
                  id="password"
                  type="password"
                  label="Password"
                  required
                  autoComplete={false}
                  value={password}
                  handleChange={handleChange}
                />
                <CardActions>
                  {validations.checkEmail(email) && password.length >= 6 ? (
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Signin
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled
                    >
                      Signin
                    </Button>
                  )}

                  <Grid item xs>
                    <Link to="/changePassword" variant="body2">
                      <Button
                        style={{ textDecoration: "none" }}
                        variant="contained"
                        type="button"
                        color="primary"
                      >
                        Forgot password?
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
