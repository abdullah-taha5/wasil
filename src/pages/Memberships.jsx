import React from "react";
import MembershipsBackground from "../components/memberships/MembershipsBackground";
import MainMemberships from "../components/memberships/MainMemberships";
import AboutService from "../components/memberships/AboutService";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MainLayout from "../layouts/MainLayout";


function Memberships() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("wasil")} | {t("memberships")}</title>
      </Helmet>
      <MainLayout>
      <MembershipsBackground />
      <MainMemberships />
      <AboutService />
      </MainLayout>
    </>
  );
}

export default Memberships;