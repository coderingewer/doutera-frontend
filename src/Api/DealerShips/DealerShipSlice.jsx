import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addDealersihpsAsync = createAsyncThunk(
    "Dealersihps/addDealersihpsAsync",
    async (data) => {
        const res = await axios.post(
            "http://localhost:8080/dealership/new",
            data,
        );
        console.log(data);
        return res.data;
    }
);
export const GetActiveDealerships = createAsyncThunk("Dealersihps/getActive", async () => {
    const res = await axios.get(
        "http://localhost:8080/dealership/active",
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
            "http://localhost:8080/dealership/activeFalse",
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
        "http://localhost:8080/dealership/update/" + id,null,
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
                console.log("sorunsuz")
            })
            .addCase(GetActiveFalseDealerships.fulfilled, (state, action) => {
                state.activeFalseDealerships = action.payload;
                console.log("sorunsuz")
            })
            .addCase(MarkAsRead.fulfilled, (state, action) => {
                state.activeFalseDealerships = state.activeFalseDealerships.filter(dealer => dealer.ID !== action.payload.ID);
                state.activeDealerships.push(action.payload);
            })

    },

})

export default DealersihpSlice.reducer;