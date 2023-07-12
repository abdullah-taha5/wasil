import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Address from "../../components/dashboard/shipping-address/Address";
import ContentAddress from "../../components/dashboard/shipping-address/ContentAddress";
import WarningAddress from "../../components/dashboard/shipping-address/WarningAddress";
import { useDispatch, useSelector } from "react-redux";
import { getMyBranch } from "../../redux/features/myBranchSlice";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ShippingAddress() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.myBranch.user);
  const branch = useSelector((state) => state.myBranch.branch);
  const loading = useSelector((state) => state.myBranch.loading);


  useEffect(() => {
    dispatch(getMyBranch());
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <DashboardLayout>
      <div className="home_content">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/dashboard/inbox">{t("dashboard")}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t("shippingAddress")}
          </li>
        </Breadcrumb>
        <Address user={user} branch={branch} />
        <ContentAddress user={user} branch={branch} />
        <WarningAddress />
      </div>
    </DashboardLayout>
  );
}

export default ShippingAddress;