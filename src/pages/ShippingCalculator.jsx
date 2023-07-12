import React from "react";
import CalculatorBackground from "../components/shipping-calculator/CalculatorBackground";
import FormCalculate from "../components/shipping-calculator/FormCalculate";
import Service from "../components/shipping-calculator/Service";
import ServiceTow from "../components/shipping-calculator/ServiceTow";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MainLayout from "../layouts/MainLayout";

function ShippingCalculator() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("wasil")} | {t("shippingCalc")}{" "}
        </title>
      </Helmet>
      <MainLayout>
        <CalculatorBackground />
        <FormCalculate />
        <Service />
        <ServiceTow />
      </MainLayout>
    </>
  );
}

export default ShippingCalculator;
