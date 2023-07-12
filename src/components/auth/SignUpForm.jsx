import React, { useEffect, useState } from "react";
import flagIcon from "../../assets/images/Vector (2).svg";
import axios from "axios";
import { CITIES_API, REGISTER_API } from "../../apis/apis";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function SignUpForm() {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [cityId, setCityId] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      const { data } = await axios.get(CITIES_API, {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      setCities(data.data.cities);
    };
    getCities();
  }, [cities]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const body = {
        full_name: fullName,
        zip,
        address,
        email,
        city_id: cityId,
        mobile,
        password,
      };
      const { data } = await axios.post(REGISTER_API, body, {
        headers: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      window.location.pathname = "/signin";
    } catch (error) {
      error.response.data.data.message.address &&
        toast.error(error.response.data.data.message.address[0]);
      error.response.data.data.message.city_id &&
        toast.error(error.response.data.data.message.city_id[0]);
      error.response.data.data.message.full_name &&
        toast.error(error.response.data.data.message.full_name[0]);
      error.response.data.data.message.mobile &&
        toast.error(error.response.data.data.message.mobile[0]);
      error.response.data.data.message.password &&
        toast.error(error.response.data.data.message.password[0]);
      error.response.data.data.message.zip &&
        toast.error(error.response.data.data.message.zip[0]);
    }
  };
  return (
    <section className="sign-up">
      <ToastContainer />
      <div className="container">
        <form className="content-sign-up" onSubmit={handleRegister}>
          <div className="h5-heading">
            <img src={flagIcon} alt="flag icon" loading="lazy"/>

            <p>
              {t("signUpWith")} <span> {t("wasilStandard")} </span>
            </p>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="full_name">{t("name")}</label>
                <input
                  type="text"
                  id="full_name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="email">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>
            

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="mobile">{t("phoneNum")}</label>
                <input
                  type="number"
                  id="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  required
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="password">{t("password")}</label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>
            {/*             
            <div className="flex-log-chek-and-foregt">
              <div className="log-ckeckbox">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span> {t("showPassword")}</span>
              </div>
            </div> */}

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="cities">{t("city")}</label>
                <select
                  className="form-control"
                  id="cities"
                  onChange={(e) => setCityId(e.target.value)}
                  required
                >
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="address">{t("address")}</label>
                <input
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="all-input">
                <label htmlFor="">{t("zip")}</label>
                <input
                  type="number"
                  minLength={5}
                  onChange={(e) => setZip(e.target.value)}
                  value={zip}
                  required
                />
              </div>
            </div>
          </div>
          {/* <div className="checkbox">
          <input type="checkbox" />
          <span>
            by creating an account you agree to the{" "}
            <a href="#">terms of use</a> and our
            <a href="">privacy policy</a>
          </span>
        </div> */}

          <div className="sign-up-button d-flex align-items-center justify-content-center">
            <button type="submit">{t("save")}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpForm;