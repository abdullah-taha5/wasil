import React, { useRef } from "react";
import arrowDownImg from "../../assets/images/arrow-down.svg";
import flagImg from "../../assets/images/alem.svg";
import turkeyFlagImg from "../../assets/images/Turkey Flag.svg";
import weightImg from "../../assets/images/shap1.svg";
import planImg from "../../assets/images/vertots.svg";
import dollarSignImg from "../../assets/images/white2.svg";
import plusImg from "../../assets/images/alem2.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { CALCULATOR_API } from "../../apis/apis";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

function FormCalculate() {
  const { t } = useTranslation();

  const [hubs, setHubs] = useState([]);
  const [country, setCountry] = useState("");
  const [packagingTypes, setPackagingTypes] = useState([]);
  const [transportationModes, setTransportationModes] = useState([]);
  const [transportationVal, setTransportationVal] = useState("");
  const [packagingVal, setPackagingVal] = useState("");
  const [weight, setWeight] = useState("");
  const [dimension, setDimension] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [output, setOutput] = useState("");
  const selectTransportationRef = useRef();
  const selectPackagingRef = useRef();

  // useEffect(() => {

  //   const getDataHub = async () => {
  //     const { data } = await axios.get(
  //       `${CALCULATOR_API}/get_hub_cal_details/${country}`,
  //       {
  //         headers: {
  //           apiKey: process.env.REACT_APP_API_KEY,
  //         },
  //       }
  //     );
  //     setPackagingTypes(data.data.hub_details.packaging_types);
  //     setTransportationModes(data.data.hub_details.transportation_modes);
  //   };
  //   getDataHub();
  // }, [hubs]);
  useEffect(() => {
    const getHubs = async () => {
      const { data } = await axios.get(CALCULATOR_API, {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      setHubs(data.data.hubs);
    };
    getHubs();
    const getDataHub = async () => {
      const { data } = await axios.get(
        `${CALCULATOR_API}/get_hub_cal_details/${country}`,
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
          },
        }
      );

      setPackagingTypes(data.data.hub_details.packaging_types);
      setTransportationModes(data.data.hub_details.transportation_modes);
    };
    getDataHub();
  }, [country]);

  const calculate = async (e) => {
    e.preventDefault();

    try {
      let body = {
        transportation_mode: selectTransportationRef.current.value,
        packaging_type: selectPackagingRef.current.value,
        weight,
        dimension,
        width,
        height,
        hub_id: country,
      };
      const { data } = await axios.post(`${CALCULATOR_API}`, body, {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      setOutput(data.data.result);

    } catch (error) {
      toast.error("This is out of range");
    }
  };

  return (
    <section className="form-calculate">
      <ToastContainer />
      <div className="container">
        <h5 className="margintops">{t("descFormCalc")}</h5>
        <form onSubmit={calculate}>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="country">{t("countryOfOrigin")}</label>

                <div className="flex-input-form">
                  <select
                    className="form-control"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    required
                  >
                    <option selected>{t("selectCountry")}</option>
                    {hubs.map((hub) => (
                      <option key={hub.id} value={hub.id}>
                        {hub.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="transportation">
                  {t("methodOfTransportation")}
                </label>

                <div className="flex-input-form">
                  <select
                    className="form-control"
                    id="transportation"
                    onChange={(e) => setTransportationVal(e.target.value)}
                    value={transportationVal}
                    ref={selectTransportationRef}
                    required
                  >
                    {transportationModes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="packaging">{t("packagingType")}</label>

                <div className="flex-input-form">
                  <select
                    className="form-control"
                    id="packaging"
                    onChange={(e) => setPackagingVal(e.target.value)}
                    value={packagingVal}
                    ref={selectPackagingRef}
                    required
                  >
                    {packagingTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="weight">{t("weight")}</label>
                <div className="flex-input-form">
                  <input
                    type="number"
                    placeholder={t("kilogram")}
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                    required
                  />
                  <p className="prag-box">KG</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="dimension">{t("dimension")}</label>
                <div className="flex-input-form">
                  <input
                    type="number"
                    placeholder={t("height")}
                    id="dimension"
                    onChange={(e) => setDimension(e.target.value)}
                    value={dimension}
                    required
                  />
                  <p className="prag-box">m</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="width">{t("width")}</label>
                <div className="flex-input-form">
                  <input
                    type="number"
                    placeholder={t("width")}
                    onChange={(e) => setWidth(e.target.value)}
                    value={width}
                    required
                  />
                  <p className="prag-box">KG</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="all-input">
                <label htmlFor="height">{t("height")} </label>
                <div className="flex-input-form">
                  <input
                    type="number"
                    id="height"
                    placeholder={t("height")}
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                    required
                  />
                  <p className="prag-box">m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-form d-flex">
            <button type="submit">{t("calculate")}</button>
          </div>
        </form>
        {output && (
          <>
            <div className="card-calaulter card-calaulter-margin-tops">
              <div className="button-title-card">
                <img src={flagImg} alt="flag" loading="lazy"/>
                <span>{t("wasilStandard")}</span>
              </div>
              <div className="flex-card-bg-calalter">
                <div className="card-content-flex">
                  <img src={turkeyFlagImg} alt="turkey flag" loading="lazy"/>
                  <article>
                    <span>{t("turkeyTo")}</span>
                    <p>
                      {t("baghdad")} - {t("wasilOffice")}
                    </p>
                  </article>
                </div>

                <div className="card-content-flex">
                  <img src={weightImg} alt="weight" loading="lazy"/>
                  <article>
                    <span>{t("weight")}</span>
                    <p>
                      {weight} {t("lbs")}
                    </p>
                  </article>
                </div>

                <div className="card-content-flex">
                  <img src={planImg} alt="plan" loading="lazy"/>
                  <article>
                    <span>{t("shippingTime")}</span>
                    <p>10-15 {t("days")}</p>
                  </article>
                </div>

                <button className="button-doller">
                  <img src={dollarSignImg} alt="dollar" loading="lazy"/>
                  {output} {t("usd")}
                </button>
              </div>
            </div>
            <div className="card-calaulter">
              <div className="button-title-card color-button-title">
                <img src={plusImg} alt="plus" loading="lazy"/>
                <span>{t("wasilPlus")} </span>
              </div>
              <div className="flex-card-bg-calalter">
                <div className="card-content-flex">
                  <img src={turkeyFlagImg} alt="turkey flag" loading="lazy"/>
                  <article>
                    <span>{t("turkeyTo")}</span>
                    <p>
                      {t("baghdad")} - {t("wasilOffice")}
                    </p>
                  </article>
                </div>

                <div className="card-content-flex">
                  <img src={weightImg} alt="weight" loading="lazy"/>
                  <article>
                    <span>{t("weight")}</span>
                    <p>
                      {weight} {t("lbs")}
                    </p>
                  </article>
                </div>

                <div className="card-content-flex">
                  <img src={planImg} alt="plan" loading="lazy"/>
                  <article>
                    <span>{t("shippingTime")}</span>
                    <p>10-15 {t("days")}</p>
                  </article>
                </div>

                <button className="button-doller">
                  <img src={dollarSignImg} alt="dollar" loading="lazy"/>
                  {(+output * 20) / 100 + +output} {t("usd")}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default FormCalculate;
