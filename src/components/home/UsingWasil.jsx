import React from "react";
import theUseImg from "../../assets/images/theUse.svg";
import frameImg from "../../assets/images/Frame.svg";
import f2Img from "../../assets/images/f2.svg";
import { useTranslation } from "react-i18next";

function UsingWasil() {
  const { t } = useTranslation();

  return (
    <section className="use-wasil">
      <div className="container">
        <div className="all-head" data-aos="fade-up" data-aos-duration="2000">
          <h4>
            <span>{t("howToUseWasil")}</span>
          </h4>
          <p>{t("descHowToUseWasil")}</p>
        </div>
        <div className="use-row-step">
          <div className="colum-step" data-aos="zoom-in-up">
            <img src={theUseImg} alt="use" loading="lazy"/>
            <p>{t("stepOne")}</p>
            <h4>{t("getYourWASILShippingAddress")}</h4>
            <p>
            {t("descGetYourWASILShippingAddress")}
            </p>
          </div>
          <div className="coum-setp" data-aos="zoom-in">
            <div className="span-step">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="colum-step" data-aos="zoom-in-up">
            <img src={frameImg} alt="frame" loading="lazy"/>
            <p>{t("stepTwo")}</p>
            <h4>{t("startShoppingAtOnlineStoresWasil")}</h4>
            <p>
            {t("descStartShoppingAtOnlineStoresWasil")}
            </p>
          </div>
          <div className="coum-setp" data-aos="zoom-in-up">
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="colum-step" data-aos="zoom-in">
            <img src={f2Img} alt="f2 img" loading="lazy"/>
            <p>{t("stepThree")}</p>
            <h4>{t("wasilWarehouseShipmentsProcess")}</h4>
            <p>
            {t("descWasilWarehouseShipmentsProcess")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsingWasil;
