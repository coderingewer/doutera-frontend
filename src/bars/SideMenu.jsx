import React from 'react'
import "./sidemenu.css"
import { Link } from 'react-router-dom'


function SideMenu() {
    return (
        <div id='links-menu' className='side-menu' >
           <Link  to="/modely-aksesories">Model Y Accessories</Link>
        <Link to="/dealership-form">Dealership</Link>
        <Link href="/a">About Us</Link>
        </div>
    )
}

export default SideMenu