
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { t } = useTranslation();


  return (
    <div className="New-header-tops-flex">
    <div className="part-one-header-flex">
      <button className="but-puls" type="button">
        <i className="bx bx-plus mx-1"></i>
        <span>{t("plusMembership")}</span>
      </button>
      <button className="but-Number">
        <span>UM1A6600</span>
      </button>
      <button className="but-none-bg">
        <i className="fas fa-plane-departure bg-transparent mx-2 text-light"></i>
        <span>{t("descInbox")}</span>
      </button>
    </div>

    {/* <div id="NewNotofication" className="New-Notofication">
      <i
        className="bx bx-bell"
        onClick={() => setShowNotifications(!showNotifications)}
      ></i>
    </div> */}
  </div>
  )
}

export default DashboardHeader