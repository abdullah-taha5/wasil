import React from "react";
import extraWrappingImg from "../../assets/images/s1.svg";
import editPackageImg from "../../assets/images/c5.svg";
import discardImg from "../../assets/images/c6.svg";
import packageReturnImg from "../../assets/images/c7.svg";
import advancedImg from "../../assets/images/c8.svg";
import packageSeparationImg from "../../assets/images/c9.svg";
import { useTranslation } from "react-i18next";

function ServiceTow() {
  const { t } = useTranslation();

  return (
    <section className="service-tow">
      <div className="container">
        <div
          className="all-head"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>
            <span>{t("wasilSuiteServices")}</span>
          </h4>
          <p>{t("stepsWasil")}</p>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={extraWrappingImg} alt="extra wrapping" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("extraWrapping")}</span>
                  </h5>
                  <p>{t("descExtraWrapping")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("priceOne")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("priceOne")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={editPackageImg} alt="edit package" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("editPackageValue")}</span>
                  </h5>
                  <p>{t("descEditPackageValue")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("free")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("free")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={discardImg} alt="discard" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("discardShoeBox")}</span>
                  </h5>
                  <p>{t("descDiscardShoeBox")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("free")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("free")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={packageReturnImg} alt="package return" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("packageReturn")}</span>
                  </h5>
                  <p>{t("descPackageReturn")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("priceTwo")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("free")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={advancedImg} alt="advanced" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("advancedPictures")}</span>
                  </h5>
                  <p>{t("descAdvancedPictures")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("priceThree")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("priceTwo")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="card-service">
              <div className="card-service-flex">
                <img src={packageSeparationImg} alt="package separation" loading="lazy"/>
                <div className="card-service-content">
                  <h5>
                    <span>{t("packageSeparation")}</span>
                  </h5>
                  <p>{t("descPackageSeparation")}</p>
                </div>
              </div>
              <div className="button-flex-card-service">
                <button className="but-card-one">
                  <span>{t("priceThree")} </span>
                  {t("forWasilStandard")}
                </button>
                <button className="but-card-tow">
                  <span>{t("priceTwo")} </span>
                  {t("forWasilPlusAndPrime")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceTow;