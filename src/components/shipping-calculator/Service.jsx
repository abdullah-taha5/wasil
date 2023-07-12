import React from "react";
import deliveryImg from "../../assets/images/image 18.svg";
import insuranceImg from "../../assets/images/c2.svg";
import cashDeliveryImg from "../../assets/images/c3.svg";
import clearanceFeeImg from "../../assets/images/card1.svg";
import extraShippingImg from "../../assets/images/c4.svg";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  return (
    <section className="service">
      <div className="container">
        <div
          className="all-head"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 className="fontsizeHeading-h4" style={{ fontSize: "25px" }}>
            <span>{t("beforeYouShip")}</span>
          </h4>
        </div>
        <div className="row mt-5">
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="box-service">
              <img src={deliveryImg} alt="delivery" loading="lazy"/>
              <h4>
                {t("wasil")}
                <span>{t("homeDelivery")}</span>
              </h4>
              <p>{t("descHomeDelivery")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="box-service">
              <img src={insuranceImg} alt="insurance" loading="lazy"/>
              <h4>
                {t("wasil")}
                <span> {t("freeInsurance")}</span>
              </h4>
              <p>{t("descFreeInsurance")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="box-service">
              <img src={cashDeliveryImg} alt="cash delivery" loading="lazy"/>
              <h4>
                {t("wasil")}
                <span> {t("cashOnDelivery")}</span>
              </h4>
              <p>{t("descCashOnDelivery")}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-12 col-md-12 col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="box-service-big">
              <img src={clearanceFeeImg} alt="clearance fee" loading="lazy"/>
              <h5>{t("wasilUsaClearanceFee")}</h5>
              <h6>{t("titleUsaClearanceFee")}</h6>
              <p>{t("descUsaClearanceFee")}</p>
              <div className="bg-price">
                <span className="span-one">{t("priceUsaClearanceFee")}</span>
                <span className="span-tow">
                  {t("descPriceUsaClearanceFee")}
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-12 col-lg-6"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="box-service-big">
              <img src={extraShippingImg} alt="extra shipping" loading="lazy"/>
              <h5>{t("wasilExtraShippingFee")}</h5>
              <h6>{t("titleExtraShippingFee")}</h6>
              <p>{t("descExtraShippingFee")}</p>
              <div className="bg-price">
                <span className="span-one">{t("priceExtraShippingFee")}</span>
                <span className="span-tow">
                  {t("descPriceExtraShippingFee")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
