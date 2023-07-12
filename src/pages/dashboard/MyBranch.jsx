import React, { useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { SRC_IMG_API } from "../../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { getMyBranch } from "../../redux/features/myBranchSlice";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
import { NavLink } from "react-router-dom";

function MyBranch() {
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
    <div id="admin-page">
      <div className="holder-dashboard">
        <Sidebar />
        <div className="home_content">
        <Breadcrumb>
        <li className="breadcrumb-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="/dashboard/inbox">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          My Branch
        </li>
      </Breadcrumb>
          <section className="new-content-suite">
            <div className="content-suite-header-content-flex">
              <article className="part-left-title-content-suite">
                <article>
                  <h5>
                    {user.name} <span>{user.suite}</span>
                  </h5>

                  <p>Member ID: {user.member_id}</p>
                </article>
              </article>

              <article className="part-right-title-content-suite">
                <div className="">
                  <h5>{branch.name}</h5>
                  <p>
                    {branch.city} - {branch.state} -{" "}
                    {branch.zip}
                  </p>
                  <p className="my-2">Phone: {branch.phone}</p>
                  <p>{branch.address}</p>
                </div>
                <div className="prat-tight-iocn">
                  <div className="box-part-right-icon ic-right-bg-three">
                    <img
                      src={`${SRC_IMG_API}/${branch.icon}`}
                      alt="branch icon"
                      width={25}
                      height={25}
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </div>

            {/* <div className="card-edting-button-page towFlex-shipment">
            <div className="card-edting-part1">
              <div className="part1-flex-weight-and-value">
                <div className="part1-bg-icon">
                  <span className="bx bx-line-chart"></span>
                </div>
                <div className="part1-cotnent">
                  <p>Weight</p>
                  <h5>12 Pounds</h5>
                </div>
              </div>
              <div className="part1-flex-weight-and-value">
                <div className="part1-bg-icon">
                  <span className="bx bx-dollar"></span>
                </div>
                <div className="part1-cotnent">
                  <p>Vulue</p>
                  <h5>400.00 USD</h5>
                </div>
              </div>
              <div className="part1-flex-weight-and-value">
                <div className="part1-bg-icon">
                  <span className="bx bx-file"></span>
                </div>
                <div className="part1-cotnent">
                  <p>4 Package</p>
                  <h5>2 Boxes</h5>
                </div>
              </div>
            </div>
      
          </div> */}
          </section>
        </div>
      </div>
    </div>
  
  );
}

export default MyBranch;
