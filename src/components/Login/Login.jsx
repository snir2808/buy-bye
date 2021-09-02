import React from "react";
import SignIn from "./SignIn";
import { Redirect } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const { currentUser } = props;
  if (currentUser) return <Redirect to="/" />;
  return (
    <div>
      <SignIn />
    </div>
  );
}
