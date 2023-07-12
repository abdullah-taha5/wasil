
import React from "react";
import flagImg from "../../assets/images/alem.svg";
import plusImg from "../../assets/images/alem2.svg";
import imgUae from "../../assets/images/p1.svg";
import imgUsa from "../../assets/images/p2.svg";
import imgTry from "../../assets/images/p3.svg";
import checkIcon from "../../assets/images/p4.svg";
import closeIcon from "../../assets/images/p5.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MainMemberships() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const { t } = useTranslation();



  return (
    <section className="bg-pricing">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-price">
              <div className="button-price-one">
                <img src={flagImg} alt="flag" loading="lazy"/>
                <span>{t("wasilStandard")}</span>
              </div>
              <div className="bg-wite-price">
                <div className="flex-content-price">
                  <img src={imgUae} alt="uae" loading="lazy"/>
                  <span>{t("UAEPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={imgUsa} alt="usa" loading="lazy"/>
                  <span>{t("USAPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={imgTry} alt="try" loading="lazy"/>
                  <span>{t("TRYPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("freeShipmentInsurance")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("freePackRepackaging")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("taxFreeShopping")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("freePackageReconsolidation")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("shipmentTracking")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="check icon" loading="lazy"/>
                  <span>{t("freeShipmentPhotos")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={closeIcon} alt="check icon" loading="lazy"/>
                  <span className="span-gray">{t("chargingForActualWeight")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={closeIcon} alt="close icon" loading="lazy"/>
                  <span className="span-gray">{t("shippingDiscount")}</span>
                </div>
              </div>
              <button className="button-free">{t("free")}</button>
              {!userData && (
                <NavLink className="button-price-tow" to="/signup">
                  {t("signUp")}
                </NavLink>
              )}
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="card-price">
              <div className="button-price-tow">
                <img src={plusImg} alt="plus" loading="lazy"/>
                <span>{t("wasilPlus")}</span>
              </div>
              <div className="bg-wite-price">
                <div className="flex-content-price">
                  <img src={imgUae} alt="uae" loading="lazy"/>
                  <span>{t("UAEPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={imgUsa} alt="usa" loading="lazy"/>
                  <span>{t("USAPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={imgTry} alt="try" loading="lazy"/>
                  <span>{t("TRYPostAddress")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("freeShipmentInsurance")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("freePackRepackaging")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("taxFreeShopping")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("freePackageReconsolidation")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("shipmentTracking")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("freeShipmentPhotos")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>{t("chargingForActualWeight")}</span>
                </div>
                <div className="flex-content-price">
                  <img src={checkIcon} alt="checkIcon" loading="lazy"/>
                  <span>20% {t("shippingDiscount")}</span>
                </div>
              </div>
              <div className="flex-but-pric">
                <div className="bg-pric-button bor-right">
                  <h5>
                    <span className="s-one-pric">
                      {" "}
                      <sup>$</sup>
                    </span>
                    10
                    <span>/{t("month")}</span>
                  </h5>
                  <h6>{t("payMonthly")}</h6>
                </div>
                <div className="bg-pric-button">
                  <h5>
                    <span className="s-one-pric">
                      {" "}
                      <sup>$</sup>
                    </span>
                    7<span>/{t("month")}</span>
                  </h5>
                  <h6>{t("payYearly")}</h6>
                </div>
              </div>
              {!userData && (
                <NavLink className="button-price-tow" to="/signup">
                  {t("signUp")}
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMemberships;
