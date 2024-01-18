import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../Products/ProductSlice'
import AdminSlice from '../Admin/AdminSlice'
import DealerShipSlice from '../DealerShips/DealerShipSlice'
import DetailSlice from '../Details/DetailSlice'
import FileSlice from '../Cluodinary/UploadFile'

export default configureStore({
  reducer: {
    products:ProductSlice,
    admin:AdminSlice,
    dealerships: DealerShipSlice,
    details:DetailSlice,
    fileUpload: FileSlice
  },
})