import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Online from "./Pages/Online";
import Profile from "./Pages/Profile";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Grab from "./Pages/Grab";
import GrabOrder from "./Pages/GrabOrder";
import OrdersDone from "./Components/Orders/OrdersDone";
import OrdersComponent from "./Components/Orders/OrdersComponent";
import Account from "./Pages/Account";
import Reports from "./Pages/Reports";
import Address from "./Pages/Address";
import Share from "./Pages/Share";
import Information from "./Pages/Information";
import Recharge from "./Pages/Recharge";
import Admin from "./Pages/Admin";
import Verify from "./Pages/Verify";
import Security from "./Pages/Security";
import Notification from "./Pages/Notificaton";
import Withdraw from "./Pages/Withdraw";
import WithdrawId from "./Pages/WithdrawId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up/:id" element={<Register />} />
        <Route exact path="/orders" element={<Orders />}>
          <Route path="done" element={<OrdersDone />} />
          <Route path="grab-one" element={<OrdersComponent />} />
        </Route>
        <Route path="/online" element={<Online />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/grab" element={<Grab />} />
        <Route path="/grab-order" element={<GrabOrder />} />
        <Route path="/account" element={<Account />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/address" element={<Address />} />
        <Route path="/share" element={<Share />} />
        <Route path="/information" element={<Information />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/verify/:id" element={<Verify />} />
        <Route path="/security" element={<Security />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/withdraw/:id" element={<WithdrawId />} />
        <Route path="/system-dashboard" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
