import React, { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import boxImg from "../../assets/images/img-box1.svg";
import testProfileImg from "../../assets/images/tst-image1.jpg";


function Shipments() {
  const [showTable, setShowTable] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div id="admin-page">
      <div className="holder-dashboard">
        <Sidebar />
        <div className="home_content">
   
          <div className="New-header-tops-flex">
            <div className="part-one-header-flex">
              <button className="but-puls" type="button">
                <i className="bx bx-plus"></i>
                <span>Puls Membership</span>
              </button>
              <button className="but-Number">
                <span>UM1A6600</span>
              </button>
              <button className="but-none-bg">
                <span>4 Days 12 Hours | until Next Shipment from USA</span>
              </button>
            </div>

            <div id="NewNotofication" className="New-Notofication">
              <i
                className="bx bx-bell"
                onClick={() => setShowNotifications(!showNotifications)}
              ></i>
            </div>
          </div>

          <div
            id="viewNotoficationToggle"
            className="view-toggle-notofication"
            style={{ display: `${showNotifications ? "block" : "none"}` }}
          >
            <div className="card-item-ntofiation">
              <article className="art-flex-info-notofication">
                <img src={testProfileImg} alt="profile image" loading="lazy"/>
                <div className="name-and-time-noto">
                  <h5>UserName</h5>
                  <span>Time and Data</span>
                </div>
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                culpa fuga nemo numquam voluptatum corporis?
              </p>
            </div>
            <hr />
            <div className="card-item-ntofiation">
              <article className="art-flex-info-notofication">
                <img src={testProfileImg} alt="profile image" loading="lazy"/>
                <div className="name-and-time-noto">
                  <h5>UserName</h5>
                  <span>Time and Data</span>
                </div>
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                culpa fuga nemo numquam voluptatum corporis?
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="new-box-searhc1">
                <span className="bx bx-search"></span>
                <input type="search" placeholder="Search here..." />
              </div>
            </div>
          </div>
          <section className="new-content-suite">
            <div className="content-suite-header-content-flex">
              <article className="part-left-title-content-suite">
                <img src={boxImg} alt="box" loading="lazy"/>
                <article>
                  <h5>
                    SHIPMENT ID <span>WSC6567543</span>
                  </h5>

                  <p>January 25, 2021</p>
                </article>
              </article>

              <article className="part-right-title-content-suite">
                <div className="">
                  <p>Package Status</p>
                  <h5>ON THE WAY</h5>
                </div>
                <div className="prat-tight-iocn">
                  <div className="box-part-right-icon ic-right-bg-three">
                    <span className="bx bxs-truck"></span>
                  </div>
                </div>
              </article>
            </div>

            <div
              id="newTable"
              className="newTable"
              style={{ display: `${showTable ? "block" : "none"}` }}
            >
              <div className="content-suite-header-content-flex">
                <article className="part-left-title-content-suite">
                  <img src={boxImg} alt="box" loading="lazy"/>
                  <article>
                    <h5>
                      AMAZON - <span>1Z7587568758758787575</span>
                    </h5>
                    <p>January 25, 2021</p>
                  </article>
                </article>

                <article className="part-right-title-content-suite">
                  <div className="">
                    <p>Package Status</p>
                    <h5>READY TO SEND</h5>
                  </div>
                  <div className="prat-tight-iocn">
                    <div className="box-part-right-icon ic-right-bg-four">
                      <span className="bx bx-check"></span>
                    </div>
                  </div>
                </article>
              </div>
              <table border="1">
                <thead>
                  <tr>
                    <th>
                      <span>Briogeohair</span> | 420342499374804877788659
                    </th>
                    <th>Quantity</th>
                    <th>Value per unit</th>
                    <th>Total value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="active-tr">
                    <td data-label="">
                      Smart Watches - wrist band - black color
                    </td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Value per unit">$100</td>
                    <td data-label=" Total value">$100</td>
                  </tr>
                  <tr className="">
                    <td data-label="">
                      Smart Watches - wrist band - black color
                    </td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Value per unit">$100</td>
                    <td data-label=" Total value">$100</td>
                  </tr>
                </tbody>
              </table>
              <div className="button-table">
                <button className="viewPicture">View Picture</button>
              </div>
              <table border="1">
                <thead>
                  <tr>
                    <th>
                      <span>Briogeohair</span> | 420342499374804877788659
                    </th>
                    <th>Quantity</th>
                    <th>Value per unit</th>
                    <th>Total value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="active-tr">
                    <td data-label="">
                      Smart Watches - wrist band - black color
                    </td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Value per unit">$100</td>
                    <td data-label="Total value">$100</td>
                  </tr>
                  <tr className="">
                    <td data-label="Briogeohair  |  420342499374804877788659">
                      Smart Watches - wrist band - black color
                    </td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Value per unit">$100</td>
                    <td data-label=" Total value">$100</td>
                  </tr>
                </tbody>
              </table>
              <div className="button-table">
                <button className="viewPicture">View Picture</button>
              </div>
            </div>

            <div className="card-edting-button-page towFlex-shipment">
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
              <div className="card-edting-part2">
                <button className="viewPicture">Invoice</button>
                <button className="EditPrice">Track</button>

                <button
                  type="button"
                  id="TogglesIcon"
                  className={`bx ${
                    showTable ? "bx-chevron-up" : "bx-chevron-down"
                  } button-toggle-arrows`}
                  onClick={() => setShowTable(!showTable)}
                ></button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shipments;
