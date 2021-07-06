import SignIn from "./Services/Authentication/components/Authentication/SignIn";
import "./App.css";
import { Provider } from "react-redux";
import SignUp from "./Services/Authentication/components/Authentication/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Services/Authentication/components/Authentication/ForgotPassword";
import NavBar from "./Services/Dashboard/NavBar/components/NavBar";
import { store } from "./store/store/store";
import Student from "./Services/Register/components/Student";
import Register from "./Services/Register/components/Register";
import StudentsData from "./Services/Register/components/AdminViewStudent/StudentsData"
import ExcelToJson from "./Services/Register/components/ExcelInvite/ExcelToJson"
// import Checkout from "./Services/Dashboard/NavBar/components/Checkout/components/Checkout"
import RegisterData from "./Services/Register/components/RegistrationData/RegisterData"
import Checkout from "./Services/Dashboard/Payment/Checkout"
import Razorpay from "./Services/Dashboard/Payment/Razorpay"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={NavBar} /> */}
            <Route path="/data" component={Register} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Student/:RegNo" component={Student} />
            <Route path="/changePassword" component={ForgotPassword} />
            <Route path="/StudentsData" component={StudentsData} />
            <Route path="/publish" component={ExcelToJson} />
            <Route path="/registrationFee" component={RegisterData}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
