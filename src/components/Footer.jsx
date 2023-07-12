import React from "react";
import instagram from "../assets/images/inst.svg";
import fb from "../assets/images/icon_ionic_logo_facebook 1.svg";
import fbMassenger from "../assets/images/MessengerLogo.svg";
import appStore from "../assets/images/mask_group_1255 1.svg";
import googlePlay from "../assets/images/mask_group_1254 1.svg";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footers">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className="footer-section-conntent">
              <img src={logo} alt="logo" loading="lazy"/>
              <p>{t("descFooter")}</p>
              <div className="icon-footer-flex">
                <div className="box-iamge-footer">
                  <img src={instagram} alt="instagram" loading="lazy"/>
                </div>
                <div className="box-iamge-footer box-image-tow">
                  <img src={fb} alt="facebook" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-2">
                <div className="footer-part1 footer-one">
                  <h4>{t("pricing")}</h4>
                  <ul>
                    <li>
                      <a href="calculate.html">{t("calculator")}</a>
                    </li>
                    <li>
                      <a href="WASIL-MEMBERSHIP.html">{t("memberships")}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-part1 footer-address footer-tow">
                  <h4>{t("ourOffices")}</h4>
                  <ul>
                    <li>
                      <a href="">{t("AddressWasilFirst")}</a>
                    </li>
                    <li>
                      <a href="">{t("AddressWasilSecond")}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-part1 footer-tree">
                  <h4>{t("messageUsDirectly")}</h4>
                  <div className="box-footer-image">
                    <img src={fbMassenger} alt="massenger" loading="lazy"/>
                    <p>{t("FBMessenger")}</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="footer-part1 footer-four">
                  <h4>{t("wasilApplication")}</h4>
                  <div className="box-footer-image">
                    <img src={appStore} alt="app store" loading="lazy"/>
                    <p>{t("appStore")}</p>
                  </div>
                  <div className="box-footer-image">
                    <img src={googlePlay} alt="google play" loading="lazy"/>
                    <p>{t("googlePlay")}</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-2">
                <div className="footer-part1 margin-tops-mamis footer-five">
                  <h4>{t("policies")}</h4>
                  <ul className="ul">
                    <li>
                      <a href="">{t("rulesAndRegulations")}</a>
                    </li>
                    <li>
                      <a href="">{t("prohibitedItems")}</a>
                    </li>
                    <li>
                      <a href="">{t("FAQ")}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-part1 margin-tops-mamis footer-six">
                  <h4>{t("phoneNum")}</h4>
                  <ul>
                    <li>
                      <a href="">+964 772 600 2000</a>
                    </li>
                    <li>
                      <a href="">+964 750 603 2000</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-right">
        <span>
          {t("copyright")} &copy; 2022,{" "}
          <span className="span-footer">{t("copyrightDesc")}</span>{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
