import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl  = process.env.REACT_APP_API_URL;
export const addProductsAsync = createAsyncThunk(
    "products/addProductsAsync",
    async (data) => {
        const res = await axios.post(
            `${apiUrl}/product/new`,
            data,
            {
                headers: {
                    ID: `${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(data);
        return res.data;
    }
);
export const UpdateProductsAsync = createAsyncThunk(
    "products/UpdateProductsAsync",
    async (data) => {
        const res = await axios.put(
            `${apiUrl}product/update/` + data.ID, data,
            {
                headers: {
                    ID: `${localStorage.getItem("token")}`,
                },
            }
        );
        console.log("data",data);
        return res.data;
    }
);
export const DeleteProductsAsync = createAsyncThunk(
    "products/DeleteProductAsync",
    async (id) => {
        const res = await axios.delete(
            `${apiUrl}/product/delete/` + id,
            {
                headers: {
                    ID: `${localStorage.getItem("token")}`,
                },
            }
        );
        return res.data;
    }
);

export const GetAllProducts = createAsyncThunk("Products/getAll", async () => {
    const res = await axios.get(
        `${apiUrl}product/all`,
    );
    return res.data;
});
export const GetProductByIdAsync = createAsyncThunk("Products/GetProductByIdAsync", async (id) => {
    const res = await axios.get(
        `${apiUrl}product/byid/` + id,
    );
    return res.data;
});
const Productslice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: localStorage.getItem("product"),
        productReal: null,
        loading: false,
        error: null,
        product: null,
        success: false,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.success = true
            })
            .addCase(GetProductByIdAsync.fulfilled, (state, action) => {
                state.productReal = action.payload
                state.success= true
                console.log(action.payload)
                localStorage.setItem("product", JSON.stringify(action.payload))
            })
    }

})

export default Productslice.reducer;