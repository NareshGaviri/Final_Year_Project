import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SasiLogo from "../../../../../Assets/sasilogo.jpeg"
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 340,
  },
});
function EmployeeProfile(props) {
    const {collectionData}= props
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Profile
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Sasi Inistitute Of Technology And Enginnering"}
        </DialogTitle>
        <DialogContent>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={collectionData.photoUrl ? collectionData.photoUrl : SasiLogo}
                title="Profile Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {collectionData.fName + " " + collectionData.lName}
                </Typography>
               {collectionData.email}
              </CardContent>
            </CardActionArea>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        collectionData : state.authenticate.auth.collectionData
    }
}

export default connect(mapStateToProps) (EmployeeProfile);
