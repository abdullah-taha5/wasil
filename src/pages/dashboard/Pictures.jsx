import React, { useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackageInbox } from "../../redux/features/getPackageSlice";
import Loading from "../../components/Loading";
import { SRC_IMG_API } from "../../apis/apis";
import { useTranslation } from "react-i18next";


function Pictures() {
  const { t } = useTranslation();
  const packageDetails = useSelector((state) => state.package.package);
  const { loading } = useSelector((state) => state.package);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackageInbox(id));
  }, []);


  if (loading) {
    return <Loading />;
  }
  return (
    <div id="admin-page">
      <div className="holder-dashboard">
        <Sidebar />

        <div className="home_content">
          <div className="home-delivery-flex">
            <div className="addres-header-flex">
              <div className="box-image-address">
                <span className="fa fa-photo-video"></span>
              </div>
              <div className="content-address-flex">
                <h4>{t("pictures")}</h4>
              </div>
            </div>

            <NavLink to="/dashboard/inbox" className="home-arrow-back">
              <i className="fa fa-arrow-left"></i>
            </NavLink>
          </div>

          <div className="content-return">
            <h6>
              {packageDetails?.sender} | <span>{packageDetails?.track_number}</span>
            </h6>
          </div>
          <div className="row">
            {packageDetails?.images?.map((image, i) => (
              <div className="col-sm-12 col-md-6 col-lg-3" key={i}>
                <div className="viewPicthers-box">
                  <img
                    src={`${SRC_IMG_API}/${image}`}
                    className="w-100"
                    alt="package image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pictures;