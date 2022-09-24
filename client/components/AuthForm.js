import React from "react";
import { connect } from "react-redux";
import { authenticate, authenticateGmail } from "../store";
import { GoogleLogin } from "@leecheuk/react-google-login";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, authenticateGmail } = props;
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const onSuccess = (res) => {
    authenticateGmail(res.profileObj)
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name={name}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        {name === "signup" ? (
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
        ) : null}
        {name === "signup" ? (
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
        ) : null}
        {name === "signup" ? (
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
        ) : null}
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {name === "login" ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: "12px",
              marginLeft: '20%',
              marginRight: '20%',
              borderBottom: "1px solid black",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "15px", backgroundColor: "white" }}>
              Or
            </span>
          </div>
          <div
            id="signInButton"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <GoogleLogin
              clientId={clientId}
              buttonText="Continue with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const firstName =
        formName === "signup" ? evt.target.firstName.value : null;
      const lastName = formName === "signup" ? evt.target.lastName.value : null;
      const email = formName === "signup" ? evt.target.email.value : null;
      dispatch(
        authenticate(
          username,
          password,
          formName,
          firstName,
          lastName,
          email,
          history
        )
      );
    },
    authenticateGmail: (profile) => dispatch(authenticateGmail(profile, history))
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
