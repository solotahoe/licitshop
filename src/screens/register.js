import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

export default function Register() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHassAccount] = useState(true);

  // console.log("usereeee");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user) {
        navigate("/Chasebank");
      }
    } catch (error) {
      console.log(error.message);
      setEmailError(error.message);
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url(/bit8.jpeg)",
        objectFit: "cover",
        // background: "#14192a",
      }}
    >
      <div className="container-fluid app homepage">
        <div className="row">
          <div className="divOne col-md-6">
            <img className="registerImg" src="/bi.jpg" alt="darkoneIMG" />
          </div>

          <div className="divtwo col-md-6">
            {/* <img className="logsImg" src="/logs6.png" alt="logs pics" /> */}
            <h2 className="join">Login to Logsstoore</h2>
            <h3 className="fastEasy">Fast and Easy</h3>

            <div className="input-group emailandPass input-group2">
              <div className="span-block">
                <img src="user.png" alt="user.png" />
              </div>
              <input
                type="email"
                className="text-field w-input"
                placeholder="Input your Email here"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="errorsg">{emailError}</p>
            </div>
            <div className="input-group input-group2">
              <div className="span-block">
                <img src="lock.png" alt="user.png" />
              </div>
              <input
                type="password"
                className="text-field w-input"
                placeholder="Input your password here"
                required
                // value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="errorsg">{emailError}</p>
            </div>

            <button className="loginButton" onClick={login}>
              LOGIN
            </button>
            <h6 className="passwordForgot">
              Don't have an account? <Link to="/register">sign up</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
