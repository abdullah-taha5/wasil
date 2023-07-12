import React from 'react'
import flagUnaitedState from "../../../assets/images/turkeyadd 3.svg";
import { useTranslation } from 'react-i18next';


function ContentAddress({user, branch}) {
  const { t } = useTranslation();

  
  return (
    <div className="cards-bg-wites">
    <div className="bule-cards">
      <img src={flagUnaitedState} alt="flag usa" loading="lazy"/>
      <div className="cards-bule-content">
        <h5>{t("suiteNumber")}</h5>
        <h4>{user.suite}</h4>
      </div>
    </div>
    <div className="card-tables-flex-new">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
              {t("name")}
              <br />
              <strong>{user.name}</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
            {t("address")}
              <br />
              <strong>{branch.address}</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
            {t("city")}
              <br />
              <strong>{branch.city}</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
            {t("state")}
              <br />
              <strong>{branch.state}</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
            {t("zip")}
              <br />
              <strong>{branch.zip}</strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="tables-content">
            <p>
            {t("phoneNum")}
              <br />
              <strong>{branch.phone}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContentAddress