import React, { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { getPackageInbox } from "../../redux/features/getPackageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { returnPackage } from "../../redux/features/returnPackageSlice";
import axios from "axios";
import { GET_RETURN_PRICE_API } from "../../apis/apis";


function ReturnPackage() {

  const [price, setPrice] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const [notes, setNotes] = useState(null);
  const packageDetails = useSelector((state) => state.package.package);
  const error = useSelector((state) => state.returnPackage.error);
  const message = useSelector((state) => state.returnPackage.message);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackageInbox(id));
    const getPrice = async () => {
      const { data } = await axios.get(GET_RETURN_PRICE_API, {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      setPrice(data.return_price);
    };
    getPrice();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);
  useEffect(() => {
    if (message !== null) {
      toast.success(message);
      setTimeout(function () {
        window.location.pathname = "dashboard/inbox"
      }, 3000);
      
    }
  }, [message]);

  const sendInvoice = async (e) => {
    e.preventDefault();
    // Handle Error Invoice if it was branch code equal usa
    if (packageDetails?.branch?.code === "usa" && invoice === null) {
      return toast.error("Invoice is required");
    }
    if (packageDetails?.branch?.code === "usa") {
      const reader = new FileReader();
      reader.onloadend = () => {
        const body = {
          package_id: +id,
          label: reader.result.toString(),
          extention: invoice.name.split(".").pop(),
          notes,
        };
        dispatch(returnPackage(body));
        
      };
      reader.readAsDataURL(invoice);
    }

    if (packageDetails?.branch?.code !== "usa" && invoice !== null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const body = {
          package_id: +id,
          label: reader.result.toString(),
          extention: invoice.name.split(".").pop(),
          notes,
        };
        dispatch(returnPackage(body));
      };
      reader.readAsDataURL(invoice);
    }

    if (packageDetails?.branch?.code !== "usa" && invoice === null) {
      const body = {
        package_id: +id,
        label: null,
        extention: null,
        notes,
      };
      dispatch(returnPackage(body));
    }
  };

  return (
    <div id="admin-page">
      <ToastContainer />
      <div class="holder-dashboard">
        <Sidebar />
        <form class="home_content" onSubmit={sendInvoice}>
          <div class="home-delivery-flex">
            <div class="addres-header-flex">
              <div class="box-image-address">
                <span class="fa fa-truck"></span>
              </div>
              <div class="content-address-flex">
                <h5>Edit Your Item</h5>
                <h4>VALUA</h4>
              </div>
            </div>

            <Link to="/dashboard/inbox" className="home-arrow-back">
              <i className="fa fa-arrow-left"></i>
            </Link>
          </div>
          <div class="content-return">
            <h6>
              {packageDetails?.sender} |{" "}
              <span>{packageDetails?.track_number}</span>
            </h6>
            <p class="prag-return">
              You can return your purchased item to the mentioned below fee,
              However we are going to need you to upload a Return label from the
              source you purchased you product from.
            </p>
            <p class="prag2-retrun">Your Package return free is</p>
            <div class="card-return-page">
              <h1 className="mx-2">${price}</h1>
              <article>
                <p>This Package</p>
                <h5>Return Fee</h5>
              </article>
            </div>
          </div>
          <div className="wrapper-upload mb-3">
            <div className="image"></div>
            <div className="content">
              <div className="icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <div className="text">{invoice !== null && invoice.name}</div>
            </div>
            <div id="cancel-btn">
              <i className="fas fa-times"></i>
            </div>
            <div className="file-name">img1.jfif</div>
          </div>
          <textarea
            cols="30"
            rows="5"
            className="form-control w-100"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            required={
              packageDetails?.branch?.code !== "usa" ? "true" : undefined
            }
            placeholder="Typing Notes"
          />

          <div className="flex-button-uploadImage">
            <article>
              <div className="ps-sm-3 text-center text-sm-start mx-2">
                <input
                  type="file"
                  multiple
                  id="uploadImgProfile"
                  className="d-none"
                  onChange={(e) => setInvoice(e.target.files[0])}
                  name=""
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReturnPackage;