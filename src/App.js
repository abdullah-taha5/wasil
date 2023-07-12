import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ShippingCalculator from "./pages/ShippingCalculator";
import Memberships from "./pages/Memberships";
import Inbox from "./pages/dashboard/Inbox";
import Shipments from "./pages/dashboard/Shipments";
import Archive from "./pages/dashboard/Archive";
import MyBranch from "./pages/dashboard/MyBranch";
import ShippingAddress from "./pages/dashboard/ShippingAddress";
import Outbox from "./pages/dashboard/Outbox";
import Pictures from "./pages/dashboard/Pictures";
import EditPrice from "./pages/dashboard/EditPrice";
import ReturnPackage from "./pages/dashboard/ReturnPackage";
import Settings from "./pages/dashboard/Settings";

function App() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={token && userData ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={token && userData ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/calculate" element={<ShippingCalculator />} />
        <Route path="/membership" element={<Memberships />} />
        <Route
          path="/dashboard/my-branch"
          element={token && userData ? <MyBranch /> : <Navigate to="/signin" />}
        />
        <Route
          path="/dashboard/inbox"
          element={token && userData ? <Inbox /> : <Navigate to="/signin" />}
        />
        <Route
          path="/dashboard/outbox"
          element={token && userData ? <Outbox /> : <Navigate to="/signin" />}
        />
        <Route
          path="/dashboard/pictures/:id"
          element={token && userData ? <Pictures /> : <Navigate to="/signin" />}
        />
        <Route
          path="/dashboard/edit-price/:id"
          element={
            token && userData ? <EditPrice /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/dashboard/return-package/:id"
          element={
            token && userData ? <ReturnPackage /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/dashboard/shipments"
          element={
            token && userData ? <Shipments /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/dashboard/archive"
          element={token && userData ? <Archive /> : <Navigate to="/signin" />}
        />
        <Route
          path="/dashboard/shipping-address"
          element={
            token && userData ? <ShippingAddress /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/dashboard/settings"
          element={token && userData ? <Settings /> : <Navigate to="/signin" />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
