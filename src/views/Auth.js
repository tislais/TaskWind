import React, { useState } from "react";
import { logInUser, signUpUser } from "../services/users";

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = isSignUp
        ? await signUpUser(email, password)
        : await logInUser(email, password);
      setCurrentUser({ user: res });
      setErrorMessage(null);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div className={wrap}>
      <form className={form} onSubmit={handleSubmit}>
        <h3 className={h3}>
          {isSignUp ? "Hi, new friend :)" : "Returning user, let's go!"}
        </h3>
        <input
          className={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        ></input>
        <input
          className={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        {errorMessage && <p className={error}>{errorMessage}</p>}
        <button className={button}>{isSignUp ? "Sign Up" : "Log In"}</button>
      </form>
      <button
        className={button2}
        onClick={() => {
          setErrorMessage(null);
          setIsSignUp((prevState) => !prevState);
        }}
      >
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span className={span}>{isSignUp ? "Log in" : "Sign up"}</span>
      </button>
    </div>
  );
}

const wrap = `
  bg-zinc-800/40 
  max-w-screen-sm 
  flex 
  flex-col 
  items-center 
  py-28 
  my-12 
  mx-auto 
  rounded-lg
`;

const h3 = `
  text-xl 
  text-zinc-400 
  text-center 
  my-4
`;

const input = `
  py-2 px-3 
  rounded 
  outline outline-0 
  focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500
  transition-outline duration-100 ease-in focus:ease-out
`;

const form = `
  flex 
  flex-col 
  gap-4 
  text-zinc-700 
  w-64
`;

const error = `
  text-pink-500 
  text-sm 
  text-center 
  italic
`;

const button = `
  border-emerald-700/75 
  border-2 
  p-3 
  my-3 
  rounded-lg 
  text-green-500 
  tracking-wider 
  font-semibold 
  hover:border-green-700/50 
  hover:bg-white/2 
  active:bg-green-700/10 
`;

const button2 = `
  text-zinc-400 
  text-sm 
  my-2
`;

const span = `
  text-green-700 
  ml-1 
`;
