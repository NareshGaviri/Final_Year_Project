import SignIn from "./Services/Authentication/components/Authentication/SignIn";
import "./App.css";
import { Provider } from "react-redux";
import SignUp from "./Services/Authentication/components/Authentication/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Services/Authentication/components/Authentication/ForgotPassword";
import NavBar from "./Services/Dashboard/NavBar";
import { store } from "./store/store/store";
import Student from "./Services/Register/components/Student";
import Register from "./Services/Register/components/Register";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={NavBar} /> */}
            <Route path="/data" component={Register} />
            <Route path="/signin" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Student/:RegNo" component={Student} />
            <Route path="/changePassword" component={ForgotPassword} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
