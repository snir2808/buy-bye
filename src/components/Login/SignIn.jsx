import React from "react";
import { signInWithGoogle } from "../../firebase/utils";
import "./login.css";
export default function SignIn(props) {
  return (
    <div>
      <img src={"./logo.png"} />
      <h1>Wellcome to BUY&BYE!</h1>
      <h3>Before you start your shopping trip we need you to login</h3>
      <br />
      <div onClick={signInWithGoogle} className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
}
