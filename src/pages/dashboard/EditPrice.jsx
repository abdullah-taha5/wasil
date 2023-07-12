import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import boxImg from "../../assets/images/img-box1.svg";
import { getPackageInbox } from "../../redux/features/getPackageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { editPrice } from "../../redux/features/editPriceSlice";
import { ToastContainer, toast } from "react-toastify";


function EditPrice() {
  const [inputs, setInputs] = useState({});
  const [invoices, setInvoices] = useState([]);
 
  const packageDetails = useSelector((state) => state.package.package);
  const { loading } = useSelector((state) => state.package);
  const { message } = useSelector((state) => state.updatePrice);


  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackageInbox(id));
  }, []);
  useEffect(() => {
    if (message.success) {
      toast.success(message.message);

      setTimeout(function () {
        window.location.pathname = "/dashboard/inbox";
      }, 3000);
    }
  }, [message]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const submitData = (e) => {
    e.preventDefault();
    if (Object.keys(inputs).length === 0) {
      toast.error("Please edit one Item at least");
    } else if (invoices.length === 0) {
      toast.error("Please Upload Invoice");
    } else {
      let newData = {
        package_id: id,
        data: JSON.stringify(inputs),
        images: invoices,
      };
      dispatch(editPrice(newData));
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="admin-page">
      <ToastContainer />
      <div className="holder-dashboard">
        <Sidebar />
        <div className="home_content">
          <div className="home-delivery-flex">
            <div className="addres-header-flex">
              <div className="box-image-address">
                <span className="fa fa-truck"></span>
              </div>
              <div className="content-address-flex">
                <h5>Edit Your Item</h5>
                <h4>VALUA</h4>
              </div>
            </div>

            <Link to="/dashboard/inbox" className="home-arrow-back">
              <i className="fa fa-arrow-left"></i>
            </Link>
          </div>
          <h6>
            Insert the actual value of your items below and upload the{" "}
            <span>ORIGINAL INVOICE</span> of the pakage. our team will review
            the uploaded document and approve the request.
          </h6>
          <div
            id="newTable"
            className="newTable"
            style={{ display: "block !important", margin: "50px 0px;" }}
          >
            <div className="content-suite-header-content-flex">
              <article className="part-left-title-content-suite">
                <img src={boxImg} alt="box" loading="lazy"/>
                <article>
                  <h5>
                    {packageDetails?.sender} -{" "}
                    <span>{packageDetails?.track_number}</span>
                  </h5>
                  <p>{packageDetails?.date}</p>
                </article>
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
                {packageDetails?.items?.map((item, i) => (
                  <tr key={i}>
                    <td data-lable="Item Description">{item.category}</td>
                    <td data-lable="Quantity">{item.quantity}</td>
                    <td data-lable="Value per unit">
                      <input
                        className="edit-price"
                        type="number"
                        defaultValue={item.unit_value}
                        name={item?.id}
                        value={inputs?.item?.id}
                        onChange={(e) => handleChange(e)}
                      />
                    </td>

                    <td data-lable=" Total value">${item.total_value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wrapper-upload">
            <div className="image"></div>
            <div className="content">
              <div className="icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <div className="text">
                {invoices.length === 0
                  ? "No Chosen Images"
                  : invoices.length + " Images"}
              </div>
            </div>
            <div id="cancel-btn">
              <i className="fas fa-times"></i>
            </div>
            <div className="file-name">img1.jfif</div>
          </div>
          <form
            className="flex-button-uploadImage"
            onSubmit={(e) => submitData(e)}
          >
            <article>
              <div className="ps-sm-3 text-center text-sm-start mx-2">
                <input
                  type="file"
                  multiple
                  id="uploadImgProfile"
                  className="d-none"
                  onChange={(e) => setInvoices(e.target.files)}
                />

                <button type="button" id="custom-btn">
                  <label htmlFor="uploadImgProfile" role="button">
                    Choose a file
                  </label>
                </button>
              </div>

              {/* <input id="default" type="file" hidden="" /> */}
            </article>
            <article className="subMit">
              <button type="submit">Submit</button>
            </article>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPrice;