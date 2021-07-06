import React, { useEffect } from "react";
// import "./styles.css";

export default function App() {
  const options = {
    key: "rzp_test_PmrezlZGeNy1qE",
    amount: "100", //  = INR 1
    name: "Acme shop",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: "Naresh",
      contact: "949179541",
      email: "test1@gmail.com"
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "blue",
      hide_topbar: false
    }
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <br></br>
      <br></br>
      <button className="btn btn-primary"onClick={openPayModal}>Pay with Razorpay</button>
    </div>
  );
}
