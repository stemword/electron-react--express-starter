import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Auth/Login";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import "react-notifications/lib/notifications.css";
import ExpenseJson from "./components/expensejson";
import Profile from "./components/Profile";
import Header from "./components/header";

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <div className=" divapp container-fluid nav-closed px-0">
          <Header />
          <GuestRoute path={["/login"]} component={Login} />
          <GuestRoute path={["/","/expense"]} exact component={ExpenseJson} />
          <AuthRoute path="/profile" exact component={Profile} />
        </div>
        {/* <Route path="/home" exact component={Expense} /> */}
      {/* </Layout> */}
    </Router>
  );
}

export default App;
