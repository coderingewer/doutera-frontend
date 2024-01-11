import React from 'react'
import './adminsidebar.css'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='adminsidebar' >

     <Link to="/admin-panel" >Home</Link>
     <Link to="/admin-panel/dealership-requests" >DealerShips</Link>
     <Link to="/admin-panel/new-product" >New Product</Link>
     </div>
  )
}

export default AdminSideBar