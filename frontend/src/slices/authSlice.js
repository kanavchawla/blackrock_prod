import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  coordinates: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  changedEmail: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setCoordinatesData(state, value) {
      state.coordinates = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setEmail(state, value) {
      state.changedEmail = value.payload
    }
  },
});

export const { setCoordinatesData,setSignupData, setLoading, setToken, setEmail } = authSlice.actions;

export default authSlice.reducer;