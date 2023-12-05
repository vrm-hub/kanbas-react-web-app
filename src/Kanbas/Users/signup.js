import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/signin");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="m-4">
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        placeholder="Username"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
        className="form-control mb-1"
      />
      <input
        value={credentials.password}
        placeholder="Password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
        className="form-control mb-1"
      />
      <button className="btn btn-secondary w-100" onClick={signup}>Signup</button>
    </div>
  );
}
export default Signup;
