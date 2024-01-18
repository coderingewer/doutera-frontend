import React from 'react'
import './adminsidebar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../Api/Admin/AdminSlice'

function AdminSideBar() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    alert("Login out successfully");
    window.location.href = "/";
  }
  return (
    <div className='adminsidebar' >

      <Link to="/admin-panel" >Home</Link>
      <Link to="/admin-panel/dealership-requests" >DealerShips</Link>
      <Link to="/admin-panel/new-product" >New Product</Link>
      <Link to="/admin-panel/update-details" >Update Details</Link>
            <Link to="/admin-panel/update-password" >Update Password</Link>

      <button className='log-out-btn' type='button' onClick={() => handleLogout()} >Log out</button>
    </div>
  )
}

export default AdminSideBar