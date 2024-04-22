import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      // Handle sign-in logic here
      console.log("Signing in with:", email, password);
      // Redirect to home page after successful sign-i
      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      if (data.status === "success") {
        alert("done");
        sessionStorage.setItem("token",data.token)
      }
    } catch (err) {
      alert("err");
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
