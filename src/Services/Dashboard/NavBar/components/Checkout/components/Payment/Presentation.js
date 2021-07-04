import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "@material-ui/core";

function Presentation(props) {
  const {
    handleChange,
    nextStep,
    cardName,
    cardNumber,
    cvv,
    date,
    feesDetails,
    ammount,
    regNo
  } = props;
  console.log("feesDetails😁😊😃", feesDetails);
  return (
    <div style={{ marginLeft: "300px", marginRight: "300px" }}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              value={cardName}
              id="cardName"
              label="Name on card"
              onChange={handleChange}
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              value={cardNumber}
              onChange={handleChange}
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="date"
              value={date}
              onChange={handleChange}
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="ammount"
              value={ammount}
              onChange={handleChange}
              label="Ammount"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              value={cvv}
              onChange={handleChange}
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="regNo"
              label="Registration Number"
              value={regNo}
              onChange={handleChange}
              helperText="College Registration Number For Reference"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {feesDetails.DueFee === 0 &&
            cardName !== "" &&
            cardNumber !== "" &&
            cvv !== "" &&
            regNo!==""&&
            date !== "" ? (
              <Button
                onClick={nextStep}
                variant="contained"
                type="submit"
                color="primary"
              >
                Pay
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                variant="contained"
                type="submit"
                color="primary"
                disabled
              >
                Pay
              </Button>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default Presentation;
