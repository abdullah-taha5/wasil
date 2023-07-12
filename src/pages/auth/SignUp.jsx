import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import SignUpForm from "../../components/auth/SignUpForm";

function SignUp() {
  const { t } = useTranslation();

  return (
    <>
        <Helmet>
        <title>{t("wasil")} | {t("signUp")}</title>
      </Helmet>
      <Header />
    <SignUpForm/>

    </>
  );
}

export default SignUp;