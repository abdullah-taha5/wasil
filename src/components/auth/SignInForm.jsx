import React, { useState } from "react";
import phoneIcon from "../../assets/images/icons8-number-pad-50.png";
import passwordIcon from "../../assets/images/unlock.svg";
import logImg from "../../assets/images/log.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LOGIN_API } from "../../apis/apis";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";


function SignInForm() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const body = {
          email,
          password,
        };
        const { data } = await axios.post(LOGIN_API, body, {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
          },
        });
        window.location.pathname = "/";
  
        localStorage.setItem("token", data.data.token);
  
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem(
          "currentBranchCode",
          JSON.parse(localStorage.getItem("user")).merchant.current_branch_code
        );
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  return (
    <section className="log-in">
    <ToastContainer />
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <form className="content-log" onSubmit={handleLogin}>
            <h4>
              {t("signIn")} |{" "}
              <NavLink style={{ color: "#8A23FE" }} to="/signup">
                {t("signUp")}
              </NavLink>
            </h4>
            <p className="line-log"></p>

            <div className="input-log">
              <input
                type="text"
                placeholder={t("phoneOrEmail")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="input-log">
              <img src={passwordIcon} loading="lazy" alt="password icon"/>
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder={t("enterPass")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {/* <i className="fas fa-eye"></i> */}
            </div>
            <div className="flex-log-chek-and-foregt">
              <div className="log-ckeckbox">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span> {t("showPassword")}</span>
              </div>
            </div>

            {/* <div className="flex-log-chek-and-foregt">
              <div className="log-ckeckbox">
                <input type="checkbox" />
                <span>remember me </span>
              </div>
              <a href="foreget-password.html" className="foregt-password">
                Forgot Password?
              </a>
            </div> */}

            <button type="submit" className="but-log-in">
              {t("signIn")}
            </button>
          </form>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="image-log">
            <img className="text-right" src={logImg} alt="logo" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignInForm