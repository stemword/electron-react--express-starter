import React from "react";
import "../bootstrap.min.css";
import "../index.css";
import SiderBar from "./siderbar";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div className="main">
        <SiderBar />
        <div className="container-fluid">
         
          <NotificationContainer />
          <div className="row mt-3">
            <h1>Welcome Home.</h1>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state");
  console.log(state);
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    return {
      name: userData.response.name,
      email: userData.response.email,
      user_id: userData.response._id,
      loggedIn: state.auth.loggedIn,
      gst: userData.response.gst,
      company: userData.response.company,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, null)(Home);
