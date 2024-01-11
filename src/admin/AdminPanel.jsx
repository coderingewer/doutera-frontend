import React from 'react'
import "./adminpanel.css"
import AdminSideBar from './AdminSideBar'
import ProductsOn from './ProductOn'
import { Navigate } from 'react-router-dom'

function AdminPanel() {
    const logined = localStorage.getItem("logined")
    return (
        <div className='adminpanel' >
            {
                !logined && <Navigate to="/admin-panel/login"/>
            }
            <AdminSideBar/> 
            <ProductsOn/>
        </div>
    )
}

export default AdminPanel