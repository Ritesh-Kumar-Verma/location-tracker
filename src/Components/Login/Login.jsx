import React, { useEffect, useState } from "react";
import "./Login.css";
const asd = () => {
  const [page, setPage] = useState("loin");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const submitData = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (let i of formData.entries()) {
      const tempformdata = {};
      tempformdata[i[0]] = i[1];
      setFormData(tempformdata);
    }
    e.target.reset();
  };

  const signUpPage = () => {
    return (
      <div className="signup-window">
        <div className="left-signup">
          <p>Sign Up</p>

          <form action="" onSubmit={submitData}>
            <label htmlFor="email">EMAIL</label>

            <input type="text" name="email" id="email" />

            <label htmlFor="username">USERNAME</label>

            <input type="text" name="username" id="username" />

            <label htmlFor="password">PASSWORD</label>

            <input type="password" name="password" id="password" />

            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="agreement" id="agreement-label">
              I AGREE TO THE <span>TERMS OF SERVICES</span> AND{" "}
              <span>PRIVACY POLICY</span>
            </label>
            <br />

            <button type="submit" id="left-btn-signup">
              Sign Up
            </button>
            <button
              type="button"
              className="left-btn-login"
              onClick={() => setPage("login")}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    );
  };

  const loginPage = () => {
    return (
      <div className="login-window">
        <div className="right-login">
          <p>Login</p>
          <form action="" onSubmit={submitData}>
            <label htmlFor="username">USERNAME</label>

            <input type="text" name="username" id="username" />

            <label htmlFor="password">PASSWORD</label>

            <input type="password" name="password" id="password" />

            <button type="submit" className="right-btn-login">
              LOGIN
            </button>
            <button
              className="right-btn-signup"
              onClick={() => setPage("signup")}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="login-signup-window">
      {page === "login" ? loginPage() : signUpPage()}
    </div>
  );
};

export default asd;
