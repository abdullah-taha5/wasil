import React from "react";
import bg from "../../assets/images/price-image.svg";
import { useTranslation } from "react-i18next";

function MembershipsBackground() {
  const { t } = useTranslation();

  return (
    <section className="calculater-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="content-calulater">
              <h4>
              {t("wasilShippingCost")}
                <span>{t("membership")}</span>
              </h4>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="image-calulater text-right">
              <img src={bg} className="w-100" alt="background" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipsBackground;
