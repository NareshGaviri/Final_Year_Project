import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({


  backGroundSignIn: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "fixed",
    backgroundImage: "linear-gradient(50deg,#f0b1f1,#f0fff1)",
  },
  backGroundSignUp: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "fixed",
    backgroundImage: "linear-gradient(50deg,#f0b1f1,#f0fff1)",
  },
signUp:{
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
},
  signIn: {
    // padding: "60px",

    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  sasiLogo: {
    width: "360px",
    marginLeft: "10px",
  },

  paper: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '400px',  
  },
  paper1: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
    height: '560px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
