import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AdminSideBar from "../../admin/AdminSideBar";

export const LoginAsync = createAsyncThunk(
    "admin/LoginAsync",
    async (data) => {
        const res = await axios.post(
            "http://localhost:8080/admin/login",data,
        );
        console.log(res.data)
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginAsync.fulfilled, (state, action) => {
            state.products = action.payload
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("logined", true)
            builder.realLogin = true
        })
    }

})

export default AdminSlice.reducer;