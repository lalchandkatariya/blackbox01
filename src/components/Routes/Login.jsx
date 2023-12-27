import React from "react";
import { GoogleLogin } from "@react-oauth/google";
export const Login = () => {
  const onSuccess = (res) => {
    console.log("Login onSuccess", res);
  };
  const onFailure = (res) => {
    console.log("Login onFailure", res);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login With Your Gmail</h2>
      <br />
      <br />

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          onSuccess(credentialResponse);
        }}
        onError={() => {
          onFailure("Login Failed");
        }}
      />
    </div>
  );
};
