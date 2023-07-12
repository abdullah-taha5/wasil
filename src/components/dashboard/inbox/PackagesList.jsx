import React, { useState } from "react";
import boxImg from "../../../assets/images/img-box1.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveItems } from "../../../redux/features/saveItemsSlice";
import { ToastContainer, toast } from "react-toastify";
import { getNewPackagesInbox } from "../../../redux/features/inboxSlice";
import { uploadInvoice } from "../../../redux/features/uploadInvoiceSlice";
import { BeatLoader } from "react-spinners";

function PackagesList({ item, i }) {
  const [showTable, setShowTable] = useState(false);
  const [packageId, setPackageId] = useState(null);
  const [inputs, setInputs] = useState({});
  const loading = useSelector((state) => state.uploadInvoice.loading);
  const loadingSendPrice = useSelector((state) => state.saveItems.loading);


  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleChange(e, id) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setPackageId(id);
  }

  const submitData = async (e) => {
    e.preventDefault();
    if (Object.keys(inputs).length === 0) {
      toast.error("Please edit one Item at least");
    } else {
      let newData = {
        package_id: packageId,
        data: JSON.stringify(inputs),
      };
      await dispatch(saveItems(newData));
      await dispatch(
        getNewPackagesInbox({
          country_code: localStorage.getItem("currentBranchCode"),
          status: null,
        })
      );
    }
  };

  const sendInvoice = async (e, package_id) => {
    const file = e.target.files[0];
    if (file.size < 1000000) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const body = {
          package_id,
          label: reader.result.toString(),
          extention: file.name.split(".").pop(),
        };
        await dispatch(uploadInvoice(body));
        await dispatch(
          getNewPackagesInbox({
            country_code: localStorage.getItem("currentBranchCode"),
            status: null,
          })
        );
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("The image size is large");
    }
  };

  return (
    <section className="new-content-suite mt-2 package" key={i}>
      <ToastContainer />
      <div className="content-suite-header-content-flex">
        <article className="part-left-title-content-suite">
          <img src={boxImg} alt="box img" loading="lazy"/>
          <article>
            <h5>
              {item.sender} - <span>{item.track_number}</span>
            </h5>
            <p>{item.date}</p>
          </article>
        </article>

        <article className="part-right-title-content-suite">
          <div>
            <p>{t("packageStatus")}</p>
            <h5>{item.status}</h5>
          </div>
          <div className="prat-tight-iocn">
            {item.items[0].is_dangerous === 1 && (
              <div className="box-part-right-icon ic-right-bg-one">
                <span className="bx bxs-hot"></span>
              </div>
            )}

            <div className="box-part-right-icon ic-right-bg-tow">
              <span className="bx bx-check"></span>
            </div>
          </div>
        </article>
      </div>
      {item.problems.length !== 0 && (
        <div
          id="newTable"
          className="newTable"
          style={{
            display: `block`,
          }}
        >
          <table border="1">
            <thead>
              <tr>
                <th>Problem Type</th>
                <th>Problem Details</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#F8D7DA" }}>
              {item?.problems?.map((items, i) => (
                <tr key={i} className="bolder">
                  {localStorage.getItem("currentBranchCode") === "usa" && (
                    <>
                      <td data-label="Problem Type">
                        <span className="bx bxs-hot text-danger"></span>{" "}
                        {items.problem_type}
                      </td>
                      <td>{items.problem_details}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div
        id="newTable"
        className="newTable"
        style={{
          display: `${showTable && item.id === item.id ? "block" : "none"}`,
        }}
      >
        <table border="1">
          <thead>
            <tr>
              <th>{t("itemDescription")}</th>
              <th>{t("quantity")}</th>
              {localStorage.getItem("currentBranchCode") === "usa" && (
                <>
                  <th>Value per unit</th>
                  <th>Total value</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {item.items.map((items, i) => (
              <tr key={i}>
                <td data-label="Item Description">{items.category}</td>
                <td data-label="Quantity">{items.quantity}</td>
                {/* {localStorage.getItem("currentBranchCode") === "usa" && {
                 
                 item.DVRequired === 0 && (
                  <>
                     <td data-label="Value per unit">${items.unit_value}</td>
                        <td data-label=" Total value">${items.total_value}</td>
                  </>
                     
                )
              
                  
                }} */}
                {item.DVRequired !== 1 &&
                  localStorage.getItem("currentBranchCode") === "usa" && (
                    <>
                      <td data-label="Value per unit">${items.unit_value}</td>
                      <td data-label=" Total value">${items.total_value}</td>
                    </>
                  )}
                {item.DVRequired === 1 &&
                  localStorage.getItem("currentBranchCode") === "usa" && (
                    <>
                      <td data-label="Value per unit">
                        <input
                          className="edit-price"
                          id={items.id}
                          type="number"
                          name={items?.id}
                          value={inputs?.item?.id}
                          onChange={(e) => handleChange(e, item?.id)}
                        />
                      </td>
                      <td data-label=" Total value">
                        <td data-label=" Total value">
                          {document.getElementById(`${items?.id}`) &&
                            items.quantity *
                              +document.getElementById(`${items?.id}`).value}
                        </td>
                      </td>
                    </>
                  )}
              </tr>
            ))}
          </tbody>
        </table>
        <div class="text-right" style={{ backgroundColor: "#fff" }}>
          {item.DVRequired === 1 &&
            localStorage.getItem("currentBranchCode") === "usa" && (
              <button
                className="btn btn-primary my-3 mx-5"
                onClick={submitData}
              >
                {loadingSendPrice ? <BeatLoader color="#fff" /> : "Submit"}
                
              </button>
            )}
          {item.DVRequired === 2 &&
            localStorage.getItem("currentBranchCode") === "usa" && (
              <>
                <input
                  type="file"
                  id={`uploadImgProfile${item.id}`}
                  className="d-none"
                  accept="image/*"
                  onChange={(e) => sendInvoice(e, item.id)}
                />
                <label
                  htmlFor={`uploadImgProfile${item.id}`}
                  role="button"
                  className="btn btn-primary m-3 mx-5"
                >
                  {loading ? <BeatLoader color="#fff" /> : "Upload Invoice"}
                </label>
              </>
            )}
        </div>
      </div>

      <div className="card-edting-button-page">
        <div className="card-edting-part1">
          <div className="part1-flex-weight-and-value">
            <div className="part1-bg-icon">
              <span className="bx bx-line-chart"></span>
            </div>
            <div className="part1-cotnent">
              <p>{t("weight")}</p>
              <h5>
                {item.weight} {item.weight_unit}
              </h5>
            </div>
          </div>
          {/* <div className="part1-flex-weight-and-value">
               <div className="part1-bg-icon">
                 <span className="bx bx-dollar"></span>
               </div>
               <div className="part1-cotnent">
                 <p>Weight</p>
                 <h5>12 Pounds</h5>
               </div>
             </div> */}
        </div>
        <div className="card-edting-part2">
          <Link
            to={`/dashboard/pictures/${item.id}`}
            className="viewPicture btn"
          >
            {t("viewPictures")}
          </Link>
          {localStorage.getItem("currentBranchCode") === "usa" && (
            <>
              {item.edit_price_status === 0 ? (
                <Link
                  className="EditPrice btn my-3"
                  to={`/dashboard/edit-price/${item.id}`}
                >
                  Edit Price
                </Link>
              ) : (
                <button className="EditPrice btn" disabled>
                  {item.edit_price_status === 1 && "In Review"}
                  {item.edit_price_status === 2 && "Accepted"}
                  {item.edit_price_status === 3 && "Rejected"}
                </button>
              )}
             
            </>
          )}
           {item.is_returned === 0 && (
                <Link
                  to={`/dashboard/return-package/${item.id}`}
                  className="ReturnPackage btn"
                >
                  Return Package
                </Link>
              )}

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
