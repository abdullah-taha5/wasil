import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyMemberships,
  getPlans,
  subscribe,
} from "../../redux/features/settingsSlice";
import { SRC_IMG_API } from "../../apis/apis";

import { ToastContainer, toast } from "react-toastify";

function Settings() {
  const { t } = useTranslation();
  const [toggleTab, setToggleTab] = useState(1);
  const [plan, setPlan] = useState(null);
  const dispatch = useDispatch();
  const { memberships } = useSelector((state) => state.settings);
  const { plans } = useSelector((state) => state.settings);
  const { subscribeMessage } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getMyMemberships());
  }, [dispatch]);


  const selectCycle = async (cycle) => {
    const subscribeData = {
      cycle,
      plan_id: plan.id,
    };
    await dispatch(subscribe(subscribeData));
    await dispatch(getMyMemberships());
  };
  const changePlan = (hubId) => {
    dispatch(getPlans(hubId));
  };

  const cancelRequest = () => {
    setPlan(null);
  };
  const handlePlan = (plan_id) => {
    let planData = plans.find(({ id }) => id == plan_id.toString());
    setPlan(planData);
  };



// useEffect(() => {
//   if (subscribeMessage !== {}) {
//     toast.success(subscribeMessage.message)
//  }
// }, [selectCycle]);



  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="home_content">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/dashboard/inbox">{t("dashboard")}</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {t("Settings")}
          </li>
        </Breadcrumb>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={`nav-link ${toggleTab == 1 && "active color-main"}`}
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              onClick={() => setToggleTab(1)}
            >
              Memberships
            </button>
            <button
              className={`nav-link ${toggleTab == 2 && "active color-main"}`}
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              onClick={() => setToggleTab(2)}
            >
              Account Information
            </button>
            <button
              className={`nav-link ${toggleTab == 3 && "active color-main"}`}
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              onClick={(e) => setToggleTab(3)}
            >
              Your Password
            </button>
          </div>
        </nav>
        <div className="tab-content mt-4" id="nav-tabContent">
          <div
            className={`tab-pane fade ${toggleTab == 1 && "show active"}`}
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {memberships.map((membership) => (
              <div className="card bg-light" key={membership.hub_id}>
                <div className="card-header">
                  <div className="prat-tight-iocn">
                    <div className="box-part-right-icon ic-right-bg-three mx-3">
                      <img
                        src={`${SRC_IMG_API}/${membership.icon}`}
                        alt="icon"
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h5 className="font-weight-bold mt-1 color-main">
                        {membership.plan}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="card-body my-4">
                  <div className="container">
                    <div className="d-flex mb-1">
                      <p className="font-weight-bold">
                        Your current membership type:
                      </p>
                      <p className="color-main">{membership.plan_type}</p>
                    </div>
                    <div className="d-flex mb-1">
                      <p className="font-weight-bold">
                        Your current billing cycle:
                      </p>
                      <p className="color-main">
                        {membership.cycle} Membership ${membership.price}
                      </p>
                    </div>
                    <div className="d-flex mb-1">
                      <p className="font-weight-bold">
                        Your membership expirey date:
                      </p>
                      <p className="color-main">{membership.expire_at}</p>
                    </div>{" "}
                  </div>
                  <button
                    type="button"
                    onClick={() => changePlan(membership.hub_id)}
                    data-toggle="modal"
                    data-target="#modalChange"
                    className="btn btn-primary float-right"
                  >
                    Change
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`tab-pane fade ${toggleTab == 2 && "show active"}`}
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            Account Information
          </div>
          <div
            className={`tab-pane fade ${toggleTab == 3 && "show active"}`}
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            Your Password
          </div>
        </div>
      </div>
      <div
        className="modal fade bd-example-modal-lg"
        id="modalChange"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="modal-header text-light"
              style={{ background: "#7100FE" }}
            >
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Upgrade To Plus
              </h5>
              <button
                type="button"
                className="close text-light"
                data-dismiss="modal"
                aria-label="Close"
                onClick={cancelRequest}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-around ">
                <div>
                  {plans.map((plan) => (
                    <div class="form-check" key={plan.id}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={plan.id}
                        onChange={() => handlePlan(plan.id)}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        {plan.name}
                      </label>
                    </div>
                  ))}
                </div>
                {plan !== null && (
                  <>
                    <div className="text-center">
                      <div className="p-5 text-center position-relative">
                        <span className="h2 font-weight-bold color-main">
                          ${plan?.price_monthly}
                        </span>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                          Monthly
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={() => selectCycle("monthly")}
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Select
                      </button>
                    </div>

                    <div className="text-center">
                      <div className="p-5 text-center position-relative">
                        <span className="h2 font-weight-bold color-main">
                          ${plan?.price_yearly}
                        </span>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                          Yearly
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={() => selectCycle("yearly")}
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Select
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={cancelRequest}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
