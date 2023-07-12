import React from "react";
import { useState } from "react";
import boxImg from "../../../assets/images/img-box1.svg";
import { Link } from "react-router-dom";

function PackagesList({ item, i }) {
  const [showTable, setShowTable] = useState(false);
  const [packageId, setPackageId] = useState(null);

  return (
    <section className="new-content-suite">
      <div className="content-suite-header-content-flex">
        <article className="part-left-title-content-suite">
          <img src={boxImg} alt="box img" loading="lazy" />
          <article>
            <h5>
              {item.name} - <span>{item.wasil_user_track_id}</span>
            </h5>
            <p className="my-3">
              <span className="font-weight-bold text-dark">Date: </span>
              {item.date}
            </p>
            {item.address.Address1 !== null && (
              <p className="my-3">
                <span className="font-weight-bold text-dark">
                  First Address:{" "}
                </span>
                {item.address.Address1}
              </p>
            )}
            {item.address.Address2 !== null && (
              <p className="my-3">
                <span className=" font-weight-bold text-dark">
                  Second Address:{" "}
                </span>
                {item.address.Address2}
              </p>
            )}
            {item.packages_ids !== null && (
              <p className="my-3">
                <span className=" font-weight-bold text-dark">
                  Packages ids:{" "}
                </span>
                {item.packages_ids}
              </p>
            )}
            {item.address.City !== null && (
              <p className="my-3">
                <span className=" font-weight-bold text-dark">City: </span>
                {item.address.City}
              </p>
            )}
            {item.address.PhoneNumber !== null && (
              <p className="my-3">
                <span className=" font-weight-bold text-dark">
                  Phone Number:{" "}
                </span>
                {item.address.PhoneNumber}
              </p>
            )}
          </article>
        </article>

        <article className="part-right-title-content-suite">
          <div>
            <p>Package Status</p>
            <h5>{item.status}</h5>
          </div>

          <div className="prat-tight-iocn">
            <div className="box-part-right-icon ic-right-bg-tow">
              <span className="bx bx-check"></span>
            </div>
          </div>
        </article>
      </div>

      <div
        id="newTable"
        className="newTable"
        style={{
          display: `${showTable && item.id === item.id ? "block" : "none"}`,
        }}
      >
        {/* <div className="content-suite-header-content-flex">
          <article className="part-left-title-content-suite">
            <img src={boxImg} alt="box img" loading="lazy" />
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
              <div className="box-part-right-icon ic-right-bg-tow">
                <span className="bx bx-check"></span>
              </div>
            </div>
          </article>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Value per unit</th>
              <th>Total value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active-tr">
              <td data-label="Item Description">
                Smart Watches - wrist band - black color
              </td>
              <td data-label="Quantity">1</td>
              <td data-label="Value per unit">$100</td>
              <td data-label=" Total value">$100</td>
            </tr>
            <tr className="">
              <td data-label="Item Description">
                Smart Watches - wrist band - black color
              </td>
              <td data-label="Quantity">1</td>
              <td data-label="Value per unit">$100</td>
              <td data-label=" Total value">$100</td>
            </tr>
            <tr className="active-tr">
              <td data-label="Item Description">
                Smart Watches - wrist band - black color
              </td>
              <td data-label="Quantity">1</td>
              <td data-label="Value per unit">$100</td>
              <td data-label=" Total value">$100</td>
            </tr>
            <tr className="">
              <td data-label="Item Description">
                Smart Watches - wrist band - black color
              </td>
              <td data-label="Quantity">1</td>
              <td data-label="Value per unit">$100</td>
              <td data-label=" Total value">$100</td>
            </tr>
          </tbody>
        </table> */}
      </div>

      <div className="card-edting-button-page">
        <div className="card-edting-part1">
          <div className="part1-flex-weight-and-value">
            <div className="part1-bg-icon">
              <span className="bx bx-line-chart"></span>
            </div>
            <div className="part1-cotnent">
              <p>Weight</p>
              <h5>
                {item.total_weight} {item.weight_unit}
              </h5>
            </div>
          </div>
        </div>
        <div className="part1-flex-weight-and-value">
          <div className="part1-bg-icon">
            <span className="bx bx-dollar"></span>
          </div>
          <div className="part1-cotnent">
            <p>Value</p>
            <h5>{item.total_value}</h5>
          </div>
        </div>
        <div className="part1-flex-weight-and-value">
          <div className="part1-bg-icon">
            <span className="bx bx-file"></span>
          </div>
          <div className="part1-cotnent">
            <p>{item.packages_count} Package</p>
            <h5>{item.box_count} Boxes</h5>
          </div>
        </div>
        <div className="card-edting-part2">
          <Link
            to={item.invoice_link}
            target="_blank"
            className="btn viewPicture"
          >
            Invoice
          </Link>
          <Link
            to={item.inspection_link}
            target="_blank"
            className="btn EditPrice"
          >
            Inspection Form
          </Link>
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
  );
}

export default PackagesList;
