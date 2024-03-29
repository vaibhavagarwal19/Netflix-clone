import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import "./signinScreen.css";

function SignInScreen() {
  const navigate = useNavigate()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
      
     auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => alert(error.message)
      );
  };
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
      navigate('/')

    })
    .catch((error) => {
      alert(error.message)}
      );
  };

  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          {" "}
          <span className="signinScreen__gray">New to netflix?</span>{" "}
          <span className="signinScreen__link" onClick={register}>
            Sign Up now
          </span>{" "}
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
