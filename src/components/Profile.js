import React from "react";
import "../App.css";
//import "../bootstrap.min.css";
import { connect } from "react-redux";
import SiderBar from "./siderbar";

const Profile = (props) => {
  return (
    <div className="main h-full">
      <SiderBar />
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">WelCome {props.name}</h5>
                <p className="card-text">Email :{props.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    console.log(userData);
    return {
      name: userData.response.name,
      email: userData.response.email,
      loggedIn: state.auth.loggedIn,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, null)(Profile);
