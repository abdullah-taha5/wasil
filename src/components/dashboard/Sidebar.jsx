import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo-dashboard.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  LOGOUT_API,
  MEMBERSHIPS_API,
  SRC_IMG_API,
  USER_DASHBOARD_API,
} from "../../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { getMyBranch } from "../../redux/features/myBranchSlice";
import { useTranslation } from "react-i18next";
import { getPackagesInbox } from "../../redux/features/inboxSlice";

import { getBranchs } from "../../redux/features/branchsSlice";
import { getPackagesOutbox } from "../../redux/features/outboxSlice";

function Sidebar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [code, setCode] = useState("");

  const branchs = useSelector((state) => state.branchs.branchs);
  useEffect(() => {
    // const dataDashboard = async () => {
    //   try {
    //     const { data } = await axios.get(USER_DASHBOARD_API, {
    //       headers: {
    //         apiKey: API_KEY,
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // dataDashboard();

    dispatch(getBranchs());
    dispatch(
      getPackagesInbox({
        country_code: localStorage.getItem("currentBranchCode"),
        status: null,
      })
    );
  }, []);

  const handleClick = async (code) => {
    setCode(code);
    try {
      await localStorage.setItem("currentBranchCode", code);

      await dispatch(getMyBranch());
      await dispatch(getPackagesInbox({ country_code: code, status: null }));
      await dispatch(
        getPackagesOutbox({
          country_code: code,
        })
      );
  
      
      // const { data } = await axios.post(
      //   UPDATE_CURRENT_CODE_API,
      //   { code },
      //   {
      //     headers: {
      //       apiKey: API_KEY,
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

    } catch (error) {
      console.log(error);
    }
  };
  const logOut = async () => {
    try {
      await axios.post(
        LOGOUT_API,
        {},
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("currentBranchCode");
      window.location.pathname = "/signin";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`sidebar active`} style={{ overflow: "auto" }}>
        <div className="logo_content">
          <div className="logo">
            <img src={logo} alt="logo" loading="lazy"/>
          </div>
        </div>
        <ul className="nav_list">
          <li>
            <NavLink to="/dashboard/inbox">
              <i className="bx bx-package"></i>

              <span className="links_name">{t("inbox")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/outbox">
              <i className="bx bx-package"></i>

              <span className="links_name">{t("outbox")}</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/my-branch">
              <i className="bx bx-package"></i>

              <span className="links_name">My Branch</span>
            </NavLink>
            
          </li> */}
          {/* <li>
            <NavLink to="/dashboard/shipments">
              <i className="bx bx-shopping-bag"></i>

              <span className="links_name">shipments</span>
            </NavLink>
            <span className="tooltip">shipments</span>
          </li> */}
          <li>
            <NavLink to="/dashboard/archive">
              <i className="bx bx-archive"></i>

              <span className="links_name">{t("archive")}</span>
            </NavLink>
            <span className="tooltip">{t("archive")}</span>
          </li>
          <li>
            <NavLink to="/dashboard/shipping-address">
              <i className="bx bx-map"></i>

              <span className="links_name">{t("shippingAddress")}</span>
            </NavLink>
            <span className="tooltip">{t("shippingAddress")}</span>
          </li>
          {/* <li>
            <a href="home-delivery.html">
              <i className="bx bxs-truck"></i>

              <span className="links_name">Home Delivery</span>
            </a>
            <span className="tooltip">Home Delivery</span>
          </li> */}
          <li>
            <NavLink to="/dashboard/settings">
              <i className="bx bx-cog"></i>

              <span className="links_name">{t("settings")}</span>
            </NavLink>
            <span className="tooltip">{t("settings")}</span>
          </li>
        </ul>
        <div className="border-box-country border-0">
          {branchs.map((item) => (
            <div
              className={`list-city link-dark my-3  ${
                item.code === localStorage.getItem("currentBranchCode") &&
                "list-act"
              }`}
              onClick={() => handleClick(item.code)}
              role="button"
              key={item.id}
            >
              <img
                src={`${SRC_IMG_API}/${item.icon}`}
                alt="icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <ul className="nav-list mt-3">
          <li onClick={logOut} role="button">
            {/* <button >
             
            </button> */}
            <i className="bx bx-log-out"></i>

            <span className="links_name">{t("logOut")}</span>
          </li>
        </ul>
      </div>

      <div className="topmune">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" loading="lazy"/>
          </NavLink>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/inbox">
                  {t("inbox")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/outbox">
                  {t("outbox")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/archive">
                  {t("archive")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/shipping-address">
                  {t("shippingAddress")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/settings">
                  {t("settings")}
                </NavLink>
              </li>
              {branchs.map((item) => (
                <li
                  className={`list-city link-dark my-3  ${
                    item.code === localStorage.getItem("currentBranchCode") &&
                    "list-act"
                  }`}
                  onClick={() => handleClick(item.code)}
                  role="button"
                  key={item.id}
                >
                  <img
                    src={`${SRC_IMG_API}/${item.icon}`}
                    alt="icon"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <p>{item.name}</p>
                </li>
              ))}
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link" onClick={logOut}>
                  {t("logOut")}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;