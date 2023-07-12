import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import SignInForm from "../../components/auth/SignInForm";

function SignIn() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("wasil")} | {t("signIn")}
        </title>
      </Helmet>
      <Header />
    <SignInForm/>
    </>
  );
}

export default SignIn;
