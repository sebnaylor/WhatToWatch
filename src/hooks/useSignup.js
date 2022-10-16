import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw new Error("Could not complete the signup");
      }
      await res.user.updateProfile({ displayName });
      setIsPending(false);
      return res;
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  console.log(signup);
  return { error, isPending, signup };
};
