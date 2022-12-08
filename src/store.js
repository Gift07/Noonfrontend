import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Features/Auth/Reducer";
import Level from "./Features/Level/Reducer.js";
import Account from "./Features/Account/Reducer";
import Order from "./Features/Orders/Reducer";
import Deposit from "./Features/Deposits/Reducer";
import Withdraw from "./Features/Withdraw/Reducer";
import Notification from "./Features/Notification/Reducer";

const store = configureStore({
  reducer: {
    auth: Auth,
    level: Level,
    account: Account,
    order: Order,
    deposit: Deposit,
    withdraw: Withdraw,
    notification: Notification,
  },
});

export default store;
