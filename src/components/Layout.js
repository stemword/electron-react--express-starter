import React from "react";
import { connect } from "react-redux";
function Layout(props) {
  return <div>{props.children}</div>;
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
