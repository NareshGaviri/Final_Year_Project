import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { feesfees } from "./middleware/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "auto",
    height: "auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 121,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
function RegisterData(props) {
  const { feesReducer } = props;
  const classes = useStyles();
  console.log("admin", feesReducer);
  useEffect(() => {
    feesfees();
  }, []);

  return (
    <div style={{ padding: "100px", position: "absolute" }}>
      {
        feesReducer.length ?
        <Card className={classes.root}>
        Registration Fees Paid Members
        {feesReducer.map((item, index) => (
          <div className={classes.details} key={item.index}>
            {console.log(item.Name)}
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {item.Name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.RegNo}
              </Typography>
            </CardContent>
          </div>
        ))}
      </Card> : <h1>No Members Are Paid Yet............</h1>
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state.paidRegistrationFee);
  return {
    feesReducer: state.paidRegistrationFee.fees.feesData,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch(feesfees()));
  return {
    feesData: () => dispatch(feesfees()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterData);
