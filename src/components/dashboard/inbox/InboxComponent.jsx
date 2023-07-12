import React, { useEffect, useState } from "react";
import boxImg from "../../../assets/images/img-box1.svg";
import Breadcrumb from "../../Breadcrumb";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getPackagesInbox } from "../../../redux/features/inboxSlice";
import Loading from "../../Loading";
import DashboardHeader from "../DashboardHeader";
import PackagesList from "./PackagesList";
import axios from "axios";
import { PROMO_CODE_API, REMOVE_PROMO_CODE_API } from "../../../apis/apis";
import { ToastContainer, toast } from "react-toastify";

function InboxComponent() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.inbox.packages);
  const loading = useSelector((state) => state.inbox.loading);
  const [search, setSearch] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(
      getPackagesInbox({
        country_code: localStorage.getItem("currentBranchCode"),
        status: null,
      })
    );
  }, []);

  const getPackages = () => {
    if (loading) {
      return <Loading />;
    }

    if (!search) {
      return packages?.packages?.map((item, i) => (
        <PackagesList item={item} i={i} />
      ));
    } else {
      const filterPackagesBySender = packages
        ?.filter((packs) =>
          packs.sender.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((item, i) => <PackagesList item={item} i={i} />);
      const filterPackagesByTrackNumber = packages
        ?.filter((packs) =>
          packs.track_number.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((item, i) => <PackagesList item={item} i={i} />);

      if (filterPackagesBySender.length > 0) {
        return filterPackagesBySender;
      } else if (filterPackagesByTrackNumber.length > 0) {
        return filterPackagesByTrackNumber;
      }
    }
    // Result Search Not Found
    return null;
  };

  const filterByIcons = (status = null) => {
    setActiveIcon(status);
    dispatch(
      getPackagesInbox({
        country_code: localStorage.getItem("currentBranchCode"),
        status,
      })
    );
  };

  const sendPromoCode = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        PROMO_CODE_API,
        {
          code: promoCode,
          country: localStorage.getItem("currentBranchCode"),
        },
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(data.message);
      dispatch(
        getPackagesInbox({
          country_code: localStorage.getItem("currentBranchCode"),
          status: null,
        })
      );
      setPromoCode("");
    } catch (error) {
      toast.error(error.response.data.message);
      setPromoCode("");
    }
  };
  const deletePromoCode = async (e) => {
    const { data } = await axios.post(
      REMOVE_PROMO_CODE_API,
      {
        country: localStorage.getItem("currentBranchCode"),
      },
      {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    toast.success(data.message);
    dispatch(
      getPackagesInbox({
        country_code: localStorage.getItem("currentBranchCode"),
        status: null,
      })
    );
  };

  return (
    <div className="home_content">
      <ToastContainer />
      <Breadcrumb>
        <li className="breadcrumb-item">
          <NavLink to="/">{t("home")}</NavLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {t("dashboard")}
        </li>
      </Breadcrumb>

      <DashboardHeader />
      {/* {NOTE Notifications} */}
      <div className="new-search-header-top-flex">
        <img src={boxImg} alt="box img" loading="lazy" />
        <h4>
          {" "}
          <strong>{!getPackages() ? "0" : getPackages()?.length}</strong>{" "}
          {t("package")}
        </h4>
        <div className="new-box-searhc">
          <span className="bx bx-search"></span>
          <input
            type="text"
            placeholder={t("searchHere")}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        {localStorage.getItem("currentBranchCode") === "usa" && (
          <div className="icons d-flex align-items-center">
            <div
              className={`${activeIcon === 1 && "active"}`}
              onClick={() => filterByIcons(1)}
            >
              <i className="fas fa-hourglass"></i>
            </div>
            <div
              className={`${activeIcon === 2 && "active"}`}
              onClick={() => filterByIcons(2)}
            >
              <i className="fas fa-times"></i>
            </div>
            <div
              className={`${activeIcon === 0 && "active"}`}
              onClick={() => filterByIcons(0)}
            >
              <i className="fas fa-check"></i>
            </div>
            <div
              className={`${activeIcon === null && "active"}`}
              onClick={() => filterByIcons()}
            >
              <i className="fas fa-box-open"></i>
            </div>
          </div>
        )}
      </div>

      <div className="promo-code my-5">
        <button
          className="btn background-main text-light  mb-4"
          type="button"
          data-toggle="collapse"
          data-target="#demo"
        >
          <i className="fab fa-codepen"></i> Promo Code
        </button>
        <div id="demo" className="collapse">
          <form className="row g-3" onSubmit={sendPromoCode}>
            <div className="col-auto">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticEmail2"
                placeholder="Promo Code"
                onChange={(e) => setPromoCode(e.target.value)}
                value={promoCode}
                required
              />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-success mb-3">
                Confirm
              </button>
            </div>
          </form>
          {packages?.promocode !== null && (
            <>
              <div className="row text-center mt-4">
                <div className="col text-center  mx-1">
                  <div className="font-weight-bolder">Code</div>{" "}
                  <p>{packages?.promocode?.code}</p>
                </div>
                <div className="col text-center ">
                  <div className="font-weight-bolder">Discount Type</div>{" "}
                  <p>{packages?.promocode?.discount_type}</p>
                </div>
                <div className="col text-center  mx-1">
                  <div className="font-weight-bolder">Membership Type</div>{" "}
                  <p>{packages?.promocode?.membership_type}</p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col text-center ">
                  <div className="font-weight-bolder">Expiry Date</div>{" "}
                  <p>{packages?.promocode?.expiry_date}</p>
                </div>
                <div className="col text-center  mx-1">
                  <div className="font-weight-bolder">Amount</div>{" "}
                  <p>{packages?.promocode?.promocode_amount}</p>
                </div>
                <div className="col text-center ">
                  <div className="font-weight-bolder">Type</div>{" "}
                  <p>{packages?.promocode?.promocode_type}</p>
                </div>
              </div>
            </>
          )}
          {packages?.promocode !== null && (
            <>
              <button
                className="btn btn-danger float-right"
                onClick={deletePromoCode}
              >
                Delete
              </button>
              <div className="clearfix"></div>
            </>
          )}
        </div>
      </div>
      {getPackages()}
    </div>
  );
}

export default InboxComponent;

{
  /* <div
        id="viewNotoficationToggle"
        className="view-toggle-notofication"
        style={{ display: `${showNotifications ? "block" : "none"}` }}
      >
        <div className="card-item-ntofiation">
          <article className="art-flex-info-notofication">
            <img src={testProfileImg} alt="" />
            <div className="name-and-time-noto">
              <h5>UserName</h5>
              <span>Time and Data</span>
            </div>
          </article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa
            fuga nemo numquam voluptatum corporis?
          </p>
        </div>
        <hr />
        <div className="card-item-ntofiation">
          <article className="art-flex-info-notofication">
            <img src={testProfileImg} alt="" />
            <div className="name-and-time-noto">
              <h5>UserName</h5>
              <span>Time and Data</span>
            </div>
          </article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa
            fuga nemo numquam voluptatum corporis?
          </p>
        </div>
        <hr />
        <div className="card-item-ntofiation">
          <article className="art-flex-info-notofication">
            <img src={testProfileImg} alt="" />
            <div className="name-and-time-noto">
              <h5>UserName</h5>
              <span>Time and Data</span>
            </div>
          </article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa
            fuga nemo numquam voluptatum corporis?
          </p>
        </div>
      </div> */
}