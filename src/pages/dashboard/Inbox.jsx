import React from "react";
import InboxComponent from "../../components/dashboard/inbox/InboxComponent";
import DashboardLayout from "../../layouts/DashboardLayout";

function Inbox() {
  return (
    <DashboardLayout>
      <InboxComponent />
    </DashboardLayout>
  );
}

export default Inbox;