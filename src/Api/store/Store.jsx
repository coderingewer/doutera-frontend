import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../Products/ProductSlice'
import AdminSlice from '../Admin/AdminSlice'

export default configureStore({
  reducer: {
    products:ProductSlice,
    admin:AdminSlice,
  },
})