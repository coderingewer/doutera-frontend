import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
        product: null,
        success: false,
        message: null
    },
    reducers: {}

})