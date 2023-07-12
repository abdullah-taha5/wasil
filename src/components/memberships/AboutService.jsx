import React from "react";
import aboutServiceImg from "../../assets/images/about-service.svg";
import { useTranslation } from "react-i18next";

function AboutService() {
  const { t } = useTranslation();

  return (
    <section className="service-about">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="content-about">
              <h4>{t("titleAboutMemberships")}</h4>
              <p>
               {t("descAboutMemberships")}
              </p>
              <button>{t("buttonAboutMemberships")}</button>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="image-about">
              <img src={aboutServiceImg} className="w-100" alt="about service" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutService;
