import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
const apiUrl  = process.env.REACT_APP_API_URL;
export const GetDetailsAsync = createAsyncThunk(
    "details/GetDetailsAsync",
    async () => {
        const res = await axios.get(
            `${apiUrl}/details/byname/Duotera`,
        );
        console.log(res.data)
        return res.data;
    }
);
export const UpdateDetailsAsync  = createAsyncThunk(
    "details/UpdatDetails",
    async (data) => {
        const res = await axios.put(
            `${apiUrl}details/update/Duotera`,data,
            {
                headers: {
                    ID: `${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(res.data)
        return res.data;
    }
);
const DetailSlice = createSlice({
    name: "details",
    initialState: {
        detailsReal:{},
        details:localStorage.getItem("details")?JSON.parse(localStorage.getItem("details")):{},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetDetailsAsync.fulfilled, (state, action) => {
            state.detailsReal = action.payload;
            localStorage.setItem("details", JSON.stringify(action.payload))
        })
    }

})

export default DetailSlice.reducer;