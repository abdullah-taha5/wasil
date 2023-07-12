import React from "react";
import OutboxComponent from "../../components/dashboard/outbox/OutboxComponent";
import DashboardLayout from "../../layouts/DashboardLayout";

function Outbox() {
  return (
    <DashboardLayout>
      <OutboxComponent />
    </DashboardLayout>
  );
}

export default Outbox;