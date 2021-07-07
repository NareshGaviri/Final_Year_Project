import React, { useEffect } from "react";
import { connect } from "react-redux";
import { db } from "../../../config/fbConfig";
import { getFeesData } from "../NavBar/components/Checkout/middleware";
import { indexMiddleware } from "../NavBar/middleware";
import SignIn from "../../Authentication/components/Authentication/SignIn";
import { Button } from "@material-ui/core";
// import "./styles.css";

function Razor(props) {
  const {
    collectionData,
    indexMiddleware,
    getFeesData,
    feesReducer,
    paidRegistrationFee,
  } = props;
  console.log("feesReducer", feesReducer);
  if (collectionData) {
    const { fName, email, mobile, lName } = collectionData;
    console.log("collectionData", collectionData);
    var options = {
      key: "rzp_test_PmrezlZGeNy1qE",
      amount: "10000",
      name: "RegiStration Fee",
      description: "",
      // image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: fName + lName,
        contact: mobile,
        email: email,
      },
      notes: {
        address: "some address",
      },
      theme: {
        color: "blue",
        hide_topbar: false,
      },
    };
  }
  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    if (collectionData) {
      const { amount } = options;
      const ammoutPaid = amount / 100;
      console.log(ammoutPaid);
      var RegNo = collectionData.rollNumber;
      var Name = collectionData.fName;
      db.collection("PAID_REGISTRATION_FEE")
        .doc(RegNo)
        .set({ ammoutPaid, RegNo, Name })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (collectionData) {
      if (collectionData.rollNumber) {
        var id = collectionData.rollNumber;
        getFeesData(id);
      } else {
        <SignIn />;
      }
    }
    if (!collectionData) {
      <SignIn />;
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  console.log("paidRegistrationFee", paidRegistrationFee);
  return (
    <div
      className="App"
      style={{ display: "flex", marginLeft: "60px", marginTop: "20px" }}
    >
      {paidRegistrationFee.map((item) => {
        console.log("item",item)
        return (
          <div>
            {item.ammoutPaid !== null ? (
              <h1>You Already Done With Your Registration Fees ......</h1>
            ) : (
              <h1>Payment not Done Yet</h1>
            )}
          </div>
        );
      })}
      <br />
      <br />
      {console.log("feesReducer.item", paidRegistrationFee)}

      {feesReducer.DueFee === 0 && feesReducer.LibraryFee === 0 ? (
        <Button onClick={openPayModal} variant="contained" color="secondary">
          Pay with Razorpay
        </Button>
      ) : (
        <Button
          disabled
          onClick={openPayModal}
          variant="contained"
          color="primary"
        >
          Pay with Razorpay
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    collectionData: state.authenticate.auth.collectionData,
    dataVerifyId: state.dataVerifyId.dataVerify.dataVerify,
    feesReducer: state.feesReducer.feesReducer.dataFees,
    paidRegistrationFee: state.paidRegistrationFee.fees.feesData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    indexMiddleware: (id) => dispatch(indexMiddleware(id)),
    getFeesData: (id) => dispatch(getFeesData(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Razor);
