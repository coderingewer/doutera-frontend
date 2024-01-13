import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl  = process.env.REACT_APP_API_URL;
export const LoginAsync = createAsyncThunk(
    "admin/LoginAsync",
    async (data) => {
        const res = await axios.post(
            `${apiUrl}admin/login`,data,
        );
        return res.data;
    }
);
const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        token: localStorage.getItem("token"),
        logined: localStorage.getItem("logined"),
        realLogin:false
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token")
            localStorage.removeItem("logined")
            state.token = null
            state.logined = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginAsync.fulfilled, (state, action) => {
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("logined", true)
            state.realLogin = true
            console.log(state.realLogin)
        })
    }

})

export default AdminSlice.reducer;
export const { logout } = AdminSlice.actions;