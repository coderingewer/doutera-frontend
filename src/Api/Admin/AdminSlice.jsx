import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginAsync = createAsyncThunk(
    "admin/LoginAsync",
    async (data) => {
        const res = await axios.post(
            `${apiUrl}admin/login`, data,
        );
        return res.data;
    }
);
export const UpdatePassworAsync = createAsyncThunk(
    "admin/UpdatePassworAsync",
    async (data) => {
        const res = await axios.put(
            `${apiUrl}admin/update-password`, data,
        );
        return res.data;
    }
);
const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        token: localStorage.getItem("token"),
        logined: localStorage.getItem("logined"),
        realLogin: false,
        error : "",
        success : false,
        loading : false,
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
        builder
            .addCase(LoginAsync.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token)
                localStorage.setItem("logined", true)
                state.realLogin = true
                console.log(state.realLogin)
            })
            .addCase(LoginAsync.pending, (state, action) => {
               state.loading = true
            })

            .addCase(LoginAsync.rejected, (state, action) => {
                state.loading = true
                state.success = false
             })
             .addCase(UpdatePassworAsync.fulfilled, (state, action) => {
                state.success = true
                state.loading = false
            })
            .addCase(UpdatePassworAsync.pending, (state, action) => {
               state.loading = true
               state.success = false
            })

            .addCase(UpdatePassworAsync.rejected, (state, action) => {
                state.success = false
             })
            
    }

})

export default AdminSlice.reducer;
export const { logout } = AdminSlice.actions;