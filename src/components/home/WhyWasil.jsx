import React from "react";
import b1 from "../../assets/images/b1.svg";
import b2 from "../../assets/images/b2.svg";
import b3 from "../../assets/images/b55.svg";
import b4 from "../../assets/images/b4.svg";
import b5 from "../../assets/images/b5.svg";
import b6 from "../../assets/images/b6.svg";
import b7 from "../../assets/images/b7.svg";
import b8 from "../../assets/images/b8.svg";
import b9 from "../../assets/images/b9.svg";
import { useTranslation } from "react-i18next";

function WhyWasil() {
  const { t } = useTranslation();

  return (
    <section className="why-wasil">
      <div className="container">
        <div className="all-head" data-aos="fade-up" data-aos-duration="2000">
          <h4>
            <span>{t("whyWasil")}</span>
          </h4>
          <p>{t("descWhyWasil")}</p>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b1} alt="b1" loading="lazy"/>
              <h4>{t("packagesConsolidation")}</h4>
              <p>{t("descPackagesConsolidation")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b2} alt="b2" loading="lazy"/>
              <h4>{t("onlineDashboard")}</h4>
              <p>{t("descOnlineDashboard")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b3} alt="b3" loading="lazy"/>
              <h4>{t("insurance")}</h4>
              <p>{t("descInsurance")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b4} alt="b4" loading="lazy"/>
              <h4>{t("taxFree")}</h4>
              <p>{t("descTaxFree")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b5} alt="b5" loading="lazy"/>
              <h4>{t("fastDelivery")}</h4>
              <p>{t("descFastDelivery")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b6} alt="b6" loading="lazy"/>
              <h4>{t("multiPlatform")}</h4>
              <p>{t("descMultiPlatform")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b7} alt="b7" loading="lazy"/>
              <h4>{t("insurance")}</h4>
              <p>{t("descInsuranceTwo")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b8} alt="b8" loading="lazy"/>
              <h4>{t("customerService")}</h4>
              <p>{t("descFastDelivery")}</p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="box-wey">
              <img src={b9} alt="b9" loading="lazy"/>
              <h4>{t("cashOnDelivery")}</h4>
              <p>{t("descCashOnDeliveryTwo")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWasil;