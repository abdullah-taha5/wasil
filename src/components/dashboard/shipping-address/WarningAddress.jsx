import React from "react";
import warningIcon from "../../../assets/images/Warning-icon.svg";
import { useTranslation } from "react-i18next";

function WarningAddress() {
  const { t } = useTranslation();

  return (
    <>
      <div className="woring-flex">
        <img src={warningIcon} alt="warning icon" loading="lazy"/>
        <p>
          {t("warningShippingAddress")}
        </p>
      </div>

      <div className="woring-flex">
        <img src={warningIcon} alt="warning icon" loading="lazy"/>
        <p>
        {t("warningShippingAddressSecond")}
        </p>
      </div>
    </>
  );
}

export default WarningAddress;