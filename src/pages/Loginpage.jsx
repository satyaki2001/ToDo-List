import React, { useState } from "react";
import "../images/logo.jpg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="loginPage">
      <div className="login-text-container">
        <img
          src="https://ik.imagekit.io/e9bejeok1/logo.jpg?updatedAt=1680330115999"
          className="logo"
        />
        <span className="login-moto">Experiential Commerce</span>
        <div className="branding">
          <span className="by">by</span>
          <div className="company">
            <span className="dotkonnekt">DotKonnekt</span>
            <img
              className="dot"
              src="https://ik.imagekit.io/e9bejeok1/Ellipse_287dot.svg?updatedAt=1680336044930"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="login-box">
        <form action="submit" className="form-submit">
          <div className="input-login">
            <div className="login-head">
              <span className="login-head-text">Let’s get started</span>
            </div>
            <div className="login-main">
              <div className="input-boxes">
                <input
                  className="login-inputs"
                  type="text"
                  placeholder="User ID"
                  autocomplete="username"
                  required=""
                  id="id_username"
                />
                <input
                  className="login-inputs password-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autocomplete="username"
                  required=""
                  id="id_password"
                />
                <button
                  className="eye eye-button"
                  type="button"
                  onClick={handlePasswordToggle}
                >
                  <i
                    className={`far ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    } `}
                    id="togglePassword"
                  ></i>
                </button>
                <div className="sub-inputs">
                  <input className="remember-me" type="radio" />
                  <span className="remember-label">Remember me</span>
                  <a className="forgot-password" href="http://">
                    Forgot password?
                  </a>
                </div>
                <div className="login-submit">
                  <button className="login-button">
                    Continue <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="terms-and-conditions">
          <div className="terms-logo">
            <span className="i">i</span>
          </div>
          <div className="terms-box">
            <span className="terms-text1">
              By signing up, you agree to our <a href="">Terms of Use</a> Terms
              of Use and acknowledge you've read our{" "}
              <a href="">Privacy Policy</a>
            </span>
            <span className="terms-text2">
              This site is protected by reCAPTCHA Enterprise. Google's{" "}
              <a href="">Privacy Policy</a> and
              <a href=""> Terms of Use</a> apply.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
