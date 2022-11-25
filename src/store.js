import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Features/Auth/Reducer";
import Level from "./Features/Level/Reducer.js";
import Account from "./Features/Account/Reducer";

const store = configureStore({
  reducer: {
    auth: Auth,
    level: Level,
    account: Account,
  },
});

export default store;
