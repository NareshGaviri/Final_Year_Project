import React, { Component } from "react";
import Payment from "../Payment";
import { db } from "../../../../../../../config/fbConfig";
import { connect } from "react-redux";
export class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      cardName: "",
      cardNumber: "",
      cvv: "",
      date: "",
      feesPay: "",
      ammount: "",
      notDone: false,
      info: `Ammount Payed ${100}`,
    };
  }
  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };
  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.collectionData) {
      var id = this.props.collection.rollNumber;
    }
    const { info } = this.state;
    db.collection("PAID_REGISTRATION_FEE")
      .doc(id)
      .set({ info })
      .then(() => {
        alert("Payment Done Successfully");
      })
      .catch((error) => {
        console.log(error)
        alert("Please cheack .........");
        this.setState({
          notDone:true
        })
      });
  };

  render() {
    console.log("ammount", this.state.info);
    return (
      <div>
        <Payment
          {...this.state}
          previousStep={this.previousStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          feesDetails={this.props.feesDetails}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    collectionData: state.authenticate.auth.collectionData,
  };
};
export default connect(mapStateToProps)(Presentation);
