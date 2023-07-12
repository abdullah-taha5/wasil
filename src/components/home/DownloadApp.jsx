import React from "react";
import appStore from "../../assets/images/mask_group_1255 1.svg";
import googlePlay from "../../assets/images/mask_group_1254 1.svg";
import iconRight from "../../assets/images/CaretRight.svg";
import appDownload from "../../assets/images/appDownload.svg";
import { useTranslation } from "react-i18next";

function DownloadApp() {
  const { t } = useTranslation();

  return (
    <section id="download-application" className="download-application">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="content-app-phone">
              <h4>{t("WasilPhoneApp")}</h4>
              <p>
              {t("descWasilPhoneApp")}
              </p>
            </div>
            <div className="download-phone-app">
              <h6>{t("downloadItNow")}</h6>


              <div className="card-download">
                <img className="image-download" src={appStore} alt="app store" loading="lazy"/>
                <p>{t("appStore")}</p>
                <div className="box-image-arrow">
                  <img src={iconRight} alt="icon right" loading="lazy"/>
                </div>
              </div>

              <div className="card-download ">
                <img className="image-download" src={googlePlay} alt="google play" loading="lazy"/>
                <p>{t("googlePlay")}</p>
                <div className="box-image-arrow">
                  <img src={iconRight} alt="icon right" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="image-app-download">
              <img src={appDownload} className="w-100" alt="app download" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
