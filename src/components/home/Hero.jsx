import React from "react";
import imageHeader from "../../assets/images/image-header-postion.svg";
import sectionImg from "../../assets/images/sesction.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero({ userData, token }) {
  const {t} = useTranslation();

  return (
    <div className="header-bg" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="header-content">
              <h2>{t("titleHero")}</h2>
              <h4>{t("descHero")}</h4>
              <p>{t("descTwoHero")}</p>
              <NavLink to="/signup">
                {userData && token ? "" : <button>{t("signUp")}</button>}
              </NavLink>
              <img src={imageHeader} alt="hero" loading="lazy"/>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="image-header-postion">
              <img src={sectionImg} className="image-header-tow w-100" alt="section img" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
