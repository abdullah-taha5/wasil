import React from "react";
import { useTranslation } from "react-i18next";

function Address({user, branch}) {
  const { t } = useTranslation();

  return (
    <div className="addres-header-flex">
      <div className="box-image-address">
        <span className="bx bx-map"></span>
      </div>
      <div className="content-address-flex">
        <h5>{t("yourWasil")}</h5>
        <h4>{branch.name}</h4>
      </div>
    </div>
  );
}

export default Address;
