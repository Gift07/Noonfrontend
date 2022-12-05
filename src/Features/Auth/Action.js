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

export const ChangePassword = createAsyncThunk(
  "Auth/ChangePassword",
  async ({ axosPrivate, formdata }, { rejectWithValue }) => {
    try {
      const { data } = await axosPrivate.patch("auth/changepassword", formdata);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Logout = () => {
  localStorage.clear();
  window.location.reload();
};
