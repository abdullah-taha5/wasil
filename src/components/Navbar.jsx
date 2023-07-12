import React from "react";
import logo from "../assets/images/logo.svg";
import flagUnitedState from "../assets/images/Flag_of_the_United_States 1.svg";
import flagArabic from "../assets/images/Flag_of_Saudi_Arabia 1.svg";
import dashboardIcon from "../assets/images/dashbord-icon.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const changeLang = () => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", i18n.language);
  };
  changeLang();
  const handleLangArabic = () => {
    i18n.changeLanguage("ar");
    document.body.setAttribute("class", "arbic");
  }
  const handleLangEnglish = () => {
    i18n.changeLanguage("en");
    document.body.removeAttribute("class");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" loading="lazy"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {t("home")} <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculate">
                {t("shippingCalc")}
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#download-application">
                wasil app
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="https://wasilbuy.com">
                wasilBuy
              </a>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/membership">
                {t("memberships")}
              </NavLink>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {/* <div className="languah-button-header">
              <img src={flagUnitedState} alt="" />
              <span>english</span>
            </div> */}
            {userData && token ? (
              <button className="btn btn-light mx-1">
                <NavLink to="/dashboard/inbox" className="text-dark">
                  {userData.name}
                </NavLink>
              </button>
            ) : (
              <button className="sign-in-header">
                <NavLink to="/signin">{t("signIn")}</NavLink>
              </button>
            )}

            {i18n.language === "en" && (
              <div
                className="languah-button-header"
                onClick={handleLangArabic}
              >
                <img src={flagArabic} alt="flag ar" loading="lazy"/>
                <span className="arbic">العربية</span>
              </div>
            )}
            {i18n.language === "ar" && (
              <div
                className="languah-button-header"
                onClick={handleLangEnglish}
              >
                <span>english</span>
                <img src={flagUnitedState} alt="flag usa" loading="lazy"/>
              </div>
            )}
            {userData && token && (
              <button className="dasbord-header">
                <NavLink to="/dashboard/inbox" className="text-light">
                  {t("goToDashboard")}
                </NavLink>
                <img src={dashboardIcon} alt="dashboard icon" loading="lazy"/>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
