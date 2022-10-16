import React from "react";
import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
    signup(email, password, displayName);
  };
  return (
    <>
      <div className="mt-4 mx-2 bg-slate-500 rounded-2xl justify-center flex w-35">
        <form onSubmit={handleSubmit}>
          <span className="text-2xl text-center block">Signup</span>
          <div>
            <label className="text-center">
              <span>Email:</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>

          <label>
            <span>Password:</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <label>
            <span>Display Name:</span>
            <input
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>

          {!isPending && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign up
            </button>
          )}
          {isPending && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              disabled
            >
              loading
            </button>
          )}
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}
