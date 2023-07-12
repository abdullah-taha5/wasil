import React, { useState } from "react";
import testProfileImg from "../../../assets/images/tst-image1.jpg";
import boxImg from "../../../assets/images/img-box1.svg";
import Breadcrumb from "../../Breadcrumb";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardHeader from "../DashboardHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackagesOutbox } from "../../../redux/features/outboxSlice";
import PackagesList from "./PackagesList";
import Loading from "../../Loading";

function OutboxComponent() {
  const [showTable, setShowTable] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState(null);

  const { packages } = useSelector((state) => state.outbox);
  const { loading } = useSelector((state) => state.outbox);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      getPackagesOutbox({
        country_code: localStorage.getItem("currentBranchCode"),
      })
    );
  }, []);

  const getPackages = () => {
    if (loading) {
      return <Loading />;
    }

    if (!search) {
      return packages?.map((item, i) => <PackagesList item={item} i={i} />);
    } else {
      const filterPackagesByName = packages
        ?.filter((packs) =>
          packs.name.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((item, i) => <PackagesList item={item} i={i} />);
      const filterPackagesByTrackId = packages
        ?.filter((packs) =>
          packs.wasil_user_track_id
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        )
        .map((item, i) => <PackagesList item={item} i={i} />);

      if (filterPackagesByName.length > 0) {
        return filterPackagesByName;
      } else if (filterPackagesByTrackId.length > 0) {
        return filterPackagesByTrackId;
      }
    }
    // Result Search Not Found
    return null;
  };

  return (
    <div className="home_content">
      <Breadcrumb>
        <li className="breadcrumb-item">
          <NavLink to="/">{t("home")}</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/dashboard/inbox">{t("dashboard")}</NavLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {t("outbox")}
        </li>
      </Breadcrumb>

      <DashboardHeader />

      <div
        id="viewNotoficationToggle"
        className="view-toggle-notofication"
        style={{ display: `${showNotifications ? "block" : "none"}` }}
      >
        <div className="card-item-ntofiation">
          <article className="art-flex-info-notofication">
            <img src={testProfileImg} alt="test profile img" loading="lazy" />
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
            <img src={testProfileImg} alt="test profile img" loading="lazy" />
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
            <img src={testProfileImg} alt="test profile img" loading="lazy" />
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
      </div>

      <div className="new-search-header-top-flex">
        <img src={boxImg} alt="box img" loading="lazy" />
        <h4>
          {" "}
          <strong>{packages.length}</strong> Package
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
        <div className="icons d-flex align-items-center">
          <div className="bg-light ">
            <i className="fas fa-hourglass"></i>
          </div>

          <div>
            <i className="fas fa-times "></i>
          </div>
          <div>
            <i className="fas fa-check "></i>
          </div>
          <div className="active">
            <i className="fas fa-box-open "></i>
          </div>
        </div>
      </div>
      {getPackages()}
    </div>
  );
}

export default OutboxComponent;