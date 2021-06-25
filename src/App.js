import SignIn from "./Services/Authentication/components/Authentication/SignIn";
import "./App.css";
import { Provider } from "react-redux";
import SignUp from "./Services/Authentication/components/Authentication/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Services/Authentication/components/Authentication/ForgotPassword";
import NavBar from "./Services/Dashboard/NavBar";
import { store } from "./store/store/store";

import Register from "./Services/Register/components/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={NavBar} />
            <Route path="/data" component={Register} />
            <Route path="/signin" component={SignIn} />
            <Route  path="/SignUp" component={SignUp} />
           
            <Route path="/changePassword" component={ForgotPassword} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
