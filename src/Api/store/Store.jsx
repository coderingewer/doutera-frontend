import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../Products/ProductSlice'
import AdminSlice from '../Admin/AdminSlice'
import DealerShipSlice from '../DealerShips/DealerShipSlice'

export default configureStore({
  reducer: {
    products:ProductSlice,
    admin:AdminSlice,
    dealerships: DealerShipSlice,
  },
})