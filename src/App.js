import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import "react-notifications/lib/notifications.css";
import Home from "./components/Home";
import Header from "./components/header";

function App() {
  return (
    <Router>
        <div className=" divapp container-fluid nav-closed px-0">
          <Header />
          <GuestRoute path={["/"]} exact component={Home} />
        </div>
    </Router>
  );
}

export default App;
