import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl  = process.env.REACT_APP_API_URL;
export const addDealersihpsAsync = createAsyncThunk(
    "Dealersihps/addDealersihpsAsync",
    async (data) => {
        const res = await axios.post(
            `${apiUrl}dealership/new`,
            data,
        );
        return res.data;
    }
);
export const GetActiveDealerships = createAsyncThunk("Dealersihps/getActive", async () => {
    const res = await axios.get(
        `${apiUrl}dealership/active`,
        {
            headers: {
                ID: `${localStorage.getItem("token")}`,
            },
        }
    );
    return res.data;
});
export const GetActiveFalseDealerships = createAsyncThunk(
    "Dealersihps/getActiveFalse", async () => {
        const res = await axios.get(
            `${apiUrl}dealership/activeFalse`,
            {
                headers: {
                    ID: `${localStorage.getItem("token")}`,
                },
            }
        );
        return res.data;
    });
export const MarkAsRead = createAsyncThunk("Dealersihps/MarkAsRead", async (id) => {
    const res = await axios.put(
        `${apiUrl}dealership/update/` + id,null,
        {
            headers: {
               ID: `${localStorage.getItem("token")}`,
            },
        }
    );
    return res.data;
});
const DealersihpSlice = createSlice({
    name: "dealerships",
    initialState: {
        Dealersihps: [],
        activeDealerships: [],
        activeFalseDealerships: [],
        loading: false,
        error: null,
        dealership: null,
        success: false,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetActiveDealerships.fulfilled, (state, action) => {
                state.activeDealerships = action.payload;
            })
            .addCase(GetActiveFalseDealerships.fulfilled, (state, action) => {
                state.activeFalseDealerships = action.payload;
            })
            .addCase(MarkAsRead.fulfilled, (state, action) => {
                state.activeDealerships = state.activeDealerships.filter(dealer => dealer.ID !== action.payload.ID);
                state.activeFalseDealerships.push(action.payload);
            })

    },

})

export default DealersihpSlice.reducer;