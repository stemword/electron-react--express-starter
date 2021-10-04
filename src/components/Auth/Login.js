import React, { Component } from "react";
import { connect } from "react-redux";
import "./login.css";
import GoogleLogin from "react-google-login";
import SupplierDataService from "../services/supplier";
import { Link } from "react-router-dom";
class Login extends Component {
  

  render() {
    return (
      <section className="d-flex justify-content-between align-items-center hh-full login-section">
       
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (user) => dispatch({ type: "SET_LOGIN", payload: user }),
  };
};
export default connect(null, mapDispatchToProps)(Login);
