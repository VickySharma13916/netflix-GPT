import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkvalidate } from "../utils/validate";
import Header from "./Header";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const phoneNumber = useRef(null);
  const toogleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate the form data
    const errormessage = checkvalidate(
      email?.current?.value,
      password?.current?.value
      // phoneNumber?.current?.value,
      // fullName?.current?.value
    );
    setMessage(errormessage);
    if (message) return;
    //Create a new User Sign In or Sign Up
    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Vicky Sharma",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((err) => {
              setMessage(err.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In Login
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img src={LOGO} alt="netflix" className="absolute z-0" />
      <div>
        <form className="absolute rounded z-10 w-1/3 left-1/3 my-36 bg-black bg-opacity-80 flex flex-col mx-auto p-16">
          <div className="text-white text-4xl font-semibold mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>
          {!isSignIn && (
            <input
              type="text"
              ref={fullName}
              placeholder="Full Name"
              className="py-2 bg-gray-800 rounded text-white px-2 my-2"
            />
          )}
          {!isSignIn && (
            <input
              type="number"
              ref={phoneNumber}
              placeholder="Phone Number"
              className="py-2 bg-gray-800 rounded text-white px-2 my-2"
            />
          )}
          <input
            type="email"
            ref={email}
            placeholder="Email Address"
            className="py-2 bg-gray-800 rounded text-white px-2 my-2"
          />
          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="py-2 bg-gray-800 rounded text-white px-2 my-2"
          />
          <p className="text-red-600 text-sm">{message}</p>
          <button
            className="text-white rounded bg-red-600 text-lg py-2 my-8"
            onClick={(e) => handleButtonClick(e)}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white cursor-pointer" onClick={toogleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
