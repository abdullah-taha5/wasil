import React from "react";
import plusIcon from "../../assets/images/puls.svg";
import shap1 from "../../assets/images/shap1.svg";
import shapWhite from "../../assets/images/wite3.svg";
import shap2 from "../../assets/images/box-shape2 (2).svg";
import shap4 from "../../assets/images/box-shape2 (1).svg";
import shap3 from "../../assets/images/box-shape2 (3).svg";
import layerImg from "../../assets/images/layer_3.svg";
import dollarCircle from "../../assets/images/dollar-circle.svg";
import dollarCircleWhite from "../../assets/images/white2.svg";
import boxBlue from "../../assets/images/box-blue.svg";
import doBlue from "../../assets/images/do-blue.svg";
import bars from "../../assets/images/bars.svg";
import { useTranslation } from "react-i18next";

function Consolidation() {
  const { t } = useTranslation();

  return (
    <section className="shape-section">
      <div className="container">
        <div className="all-head" data-aos="fade-up" data-aos-duration="2000">
          <h5>
            <span>{t("consolidationRepackaging")}</span>
          </h5>
          <p>{t("descConsolidationRepackaging")}</p>
        </div>
        <div
          className="row-shape"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="coulm-shape">
            <img className="image-shape" src={layerImg} alt="image shape" loading="lazy"/>
            <div className="image-puls-postion">
              <img src={plusIcon} alt="plus icon" loading="lazy"/>
            </div>
            <div className="flex-shape-icon">
              <img src={shap1} alt="shap" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("weight")}</p>
                <p className="p-tow">2.3 {t("lbs")}</p>
              </div>
            </div>
            <div className="flex-shape-icon">
              <img src={dollarCircle} alt="dollar img" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("shipping")}</p>
                <p className="p-tow">2.3 {t("lbs")}</p>
              </div>
            </div>
          </div>

          <div className="coulm-shape">
            <img className="image-shape" src={shap4} alt="shap" loading="lazy"/>
            <div className="image-puls-postion">
              <img src={plusIcon} alt="plus icon" loading="lazy"/>
            </div>
            <div className="flex-shape-icon">
              <img src={shap1} alt="shap" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("weight")}</p>
                <p className="p-tow">2.3 {t("lbs")}</p>
              </div>
            </div>
            <div className="flex-shape-icon">
              <img src={dollarCircle} alt="dollar img" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("shipping")}</p>
                <p className="p-tow">30.00 {t("usd")}</p>
              </div>
            </div>
          </div>

          <div className="coulm-shape">
            <img className="image-shape" src={shap2} alt="shap" loading="lazy"/>
            <div className="image-puls-postion">
              <img src={bars} alt="bars" loading="lazy"/>
            </div>
            <div className="flex-shape-icon">
              <img src={shap1} alt="shap" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("weight")}</p>
                <p className="p-tow">2.3 {t("lbs")}</p>
              </div>
            </div>
            <div className="flex-shape-icon">
              <img src={dollarCircle} alt="dollar" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("shipping")}</p>
                <p className="p-tow">30.00 {t("usd")}</p>
              </div>
            </div>
          </div>

          <div className="coulm-shape shape-box-active">
            <img className="image-shape" src={shap3} alt="shap" loading="lazy"/>
            <h4>{t("wasilRepacking")}</h4>
            <div className="flex-shape-icon">
              <img className="text-center" src={shapWhite} alt="shap" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("weight")}</p>
                <p className="p-tow">2.3 {t("lbs")}</p>
              </div>
            </div>
            <div className="flex-shape-icon">
              <img src={dollarCircleWhite} alt="dollar" loading="lazy"/>
              <div className="content-shape">
                <p className="p-one">{t("shipping")}</p>
                <p className="p-tow">30.00 {t("usd")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row-line">
          <div className="colum-line">
            <p></p>
          </div>
          <div className="colum-line-small">
            <p></p>
          </div>
        </div>

        <div className="row-info-shap">
          <div className="coulm-info-big">
            <button className="but-info-title">
            {t("with")} <span> {t("regularShipper")} </span>
            </button>
            <div className="card-info-desrption">
              <div className="flex-shape-icon1">
                <img src={shap1} alt="shap" loading="lazy"/>
                <div className="content-shape">
                  <p className="p-one">{t("weight")}</p>
                  <p className="p-tow">2.3 {t("lbs")}</p>
                </div>
              </div>

              <div className="flex-shape-icon1">
                <img src={dollarCircle} alt="dollar" loading="lazy"/>
                <div className="content-shape">
                  <p className="p-one">{t("weight")}</p>
                  <p className="p-tow">2.3 {t("lbs")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="coulm-info-small">
            <button className="but-info-title-tow">
            {t("with")} <span>{t("wasil")}</span>
            </button>
            <div className="card-info-desrption">
              <div className="flex-shape-icon1">
                <img src={boxBlue} alt="box" loading="lazy"/>
                <div className="content-shape">
                  <p className="p-one">{t("weight")}</p>
                  <p className="p-tow">2.3 {t("lbs")}</p>
                </div>
              </div>

              <div className="flex-shape-icon1">
                <img src={doBlue} alt="doBlue" loading="lazy"/>
                <div className="content-shape">
                  <p className="p-one">{t("shipping")}</p>
                  <p className="p-tow">30.00 {t("usd")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consolidation;