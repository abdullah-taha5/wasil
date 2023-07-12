import React from "react";
import Hero from "../components/home/Hero";
import WasilAddresses from "../components/home/WasilAddresses";
import WhyWasil from "../components/home/WhyWasil";
import UsingWasil from "../components/home/UsingWasil";
import Consolidation from "../components/home/Consolidation";
import WasilAppPhone from "../components/home/WasilAppPhone";
import DownloadApp from "../components/home/DownloadApp";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MainLayout from "../layouts/MainLayout";
import ScrollButton from "../components/ScrollButton";

function Home() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const { t } = useTranslation();
 


  return (
    <>
      <Helmet>
        <title>
          {t("wasil")} | {t("home")}
        </title>
      </Helmet>
      <MainLayout>
        <Hero userData={userData} token={token} />
        {/* <WasilAddresses /> */}
        <WhyWasil />
        <UsingWasil />
        <Consolidation />
        <WasilAppPhone />
        <DownloadApp />
      </MainLayout>
    </>
  );
}

export default Home;
