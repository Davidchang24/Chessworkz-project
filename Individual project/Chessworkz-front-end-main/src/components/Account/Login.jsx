import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode"

function Login() {

  const onSuccess = (res) => {
    const userObject = jwtDecode(res.credential)
    sessionStorage.setItem("email", userObject.email)
    const data = JSON.stringify({ "email": userObject.email, "courseId": 1 })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    }


    fetch("https://follow-service.azurewebsites.net/follow/post",
      requestOptions).then(response => response.text())
  }
  const onFailure = (res) => {
    console.log("Login failure! res:", res)
  }

  return <div id="signInButton">
    <GoogleLogin
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />

  </div>;
}

export default Login;
