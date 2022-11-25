import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const SigninAction = createAsyncThunk(
  "Auth/Signin",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/signin", formdata);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const SignupAction = createAsyncThunk(
  "Auth/SignUp",
  async ({ formdata }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("auth/register", formdata);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
